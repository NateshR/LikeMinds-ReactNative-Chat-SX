import {View, Text, Alert, PermissionsAndroid, Platform} from 'react-native';
import * as React from 'react';
import {useEffect} from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeFeed from '../screens/HomeFeed';
import ExploreFeed from '../screens/ExploreFeed';
import ChatRoom from '../screens/ChatRoom';
import {useAppDispatch, useAppSelector} from '../store';
import ReportScreen from '../screens/ReportMessage';
import ImageScreen from '../components/ImageScreen';
import {
  LoaderChatroomComponent,
  LoaderComponent,
} from '../components/LoaderComponent';
import ToastMessage from '../components/ToastMessage';
import {
  CLEAR_CHATROOM_CONVERSATION,
  CLEAR_CHATROOM_DETAILS,
  SHOW_TOAST,
} from '../store/types/types';
import messaging from '@react-native-firebase/messaging';
import notifee, {
  AndroidCategory,
  AndroidImportance,
  EventType,
} from '@notifee/react-native';
import {getRoute} from '../notifications/routes';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const SwitchComponent = () => {
  const {count, chatroomCount} = useAppSelector(state => state.loader);
  const {isToast, toastMessage} = useAppSelector(state => state.homefeed);
  const dispatch = useAppDispatch();
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }

  // useEffect(() => {
  //   async function requestUserPermission() {
  //     const authStatus = await messaging().requestPermission();
  //     const enabled =
  //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //     if (enabled) {
  //       console.log('Authorization status:', authStatus);
  //     }
  //   }
  //   requestUserPermission();
  // }, []);

  async function onDisplayNotification(remoteMessage: any) {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'important',
      name: 'Important Notifications',
      importance: AndroidImportance.HIGH,
    });

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage?.data?.title,
      body: remoteMessage?.data?.sub_title,
      data: remoteMessage?.data,
      id: remoteMessage?.messageId,
      android: {
        channelId,
        // smallIcon: remoteMessage?.community_logo, // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        // fullScreenAction: {
        //   id: 'full-screen',
        // },
        // category: AndroidCategory.REMINDER,
        importance: AndroidImportance.HIGH,
      },
    });
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      let val = await onDisplayNotification(remoteMessage);
      return val;
    });

    notifee.onForegroundEvent(async ({type, detail}) => {
      const {notification, pressAction} = detail;
      const navigation = navigationRef?.current;
      let currentRoute = navigation?.getCurrentRoute();
      let routes = getRoute(detail?.notification?.data?.route);

      if (type === EventType.PRESS) {
        if (!!navigation) {
          if ((currentRoute?.name as any) === routes?.route) {
            if (
              JSON.stringify(routes?.params) !==
              JSON.stringify(currentRoute?.params)
            ) {
              dispatch({
                type: CLEAR_CHATROOM_CONVERSATION,
                body: {conversations: []},
              });
              dispatch({
                type: CLEAR_CHATROOM_DETAILS,
                body: {chatroomDetails: {}},
              });
              const popAction = StackActions.pop(1);
              navigation.dispatch(popAction);
              navigation.navigate(
                routes?.route as never,
                routes?.params as never,
              );
            }
          } else {
            navigation.navigate(
              routes?.route as never,
              routes?.params as never,
            ); //navigate('ChatRoom', {chatroomID: 69285});
          }
        } else {
          // navigation?.reset([
          //   {name: 'HomeFeed'},
          //   {name: 'ChatRoom', params: {chatroomID: 69285}},
          // ]);
        }
      }
      // await notifee.cancelNotification(notification?.id as string);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="HomeFeed">
          <Stack.Screen name="HomeFeed" component={HomeFeed} />
          <Stack.Screen name="ExploreFeed" component={ExploreFeed} />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          <Stack.Screen name="Report" component={ReportScreen} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToastMessage
        message={toastMessage}
        isToast={isToast}
        onDismiss={() => {
          dispatch({type: SHOW_TOAST, body: {isToast: false, msg: ''}});
        }}
      />
      {count > 0 && <LoaderComponent />}
      {chatroomCount > 0 && <LoaderChatroomComponent />}
    </View>
  );
};

export default SwitchComponent;
