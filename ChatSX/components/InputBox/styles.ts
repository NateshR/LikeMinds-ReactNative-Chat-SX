import {StyleSheet, PixelRatio, Platform} from 'react-native';
import Layout from '../../constants/Layout';
import STYLES from '../../constants/Styles';

const pixelRatio = PixelRatio.get();

export const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    borderRadius: 30,
    width: Layout.window.width - 75,
  },
  inputBoxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    margin: 5,
  },
  addMoreButton: {
    padding: 10,
    paddingLeft: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiButton: {
    padding: 10,
  },

  emoji: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  chevron: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },

  send: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginLeft: 5,
  },

  mic: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  inputParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 0,
    width: '70%',
  },
  voiceNotesInputParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 0,
    width: '88%',
  },
  input: {
    flexGrow: 1,
    fontSize: STYLES.$FONT_SIZES.XL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    maxHeight: 120,
    padding: 0,
    marginBottom: 2,
    overflow: 'scroll',
  },
  sendButton: {
    height: 50,
    width: 50,
    backgroundColor: STYLES.$COLORS.SECONDARY,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emojiPicker: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },

  centeredView: {
    flexGrow: 1,
    marginTop: 20,
  },
  modalViewParent: {
    position: 'absolute',
    bottom: 27 * pixelRatio,
    flexGrow: 1,
    width: Layout.window.width,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  alignModalElements: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },
  cameraStyle: {backgroundColor: '#06C3AF', padding: 15, borderRadius: 50},
  imageStyle: {backgroundColor: '#555feb', padding: 15, borderRadius: 50},
  docStyle: {backgroundColor: '#e55e69', padding: 15, borderRadius: 50},
  pollStyle: {backgroundColor: '#4098f7', padding: 15, borderRadius: 50},
  replyBoxParent: {
    backgroundColor: 'white',
    borderBottom: 'none',
    borderBottomWidth: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: STYLES.$COLORS.MSG,
    overflow: 'hidden',
  },
  replyBox: {marginHorizontal: 10, marginTop: 10},
  linkPreviewTextView: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '45%',
  },
  linkPreviewTitle: {
    color: 'black',
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.BOLD,
    overflow: 'hidden',
  },
  alignRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  linkPreviewIcon: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginLeft: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  linkPreviewBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  linkPreviewMessageText: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
    maxWidth: Layout.window.width - 150,
  },
  replyBoxClose: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: STYLES.$COLORS.SELECTED_BLUE,
    padding: 5,
    borderRadius: 10,
  },
  replyCloseImg: {height: 7, width: 7, resizeMode: 'contain'},
  iconText: {
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
  },
  iconContainer: {alignItems: 'center', margin: 5 * pixelRatio, gap: 5},
  avatar: {
    width: 30,
    height: 30,
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    marginRight: STYLES.$MARGINS.SMALL,
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 15,
    borderBottomColor: STYLES.$COLORS.MSG,
  },
  title: {
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    color: STYLES.$COLORS.PRIMARY,
  },
  subTitle: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.MSG,
  },
  recordTitle: {
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.MSG,
    marginTop: Platform.OS === 'ios' ? 3 : 0,
  },
  messageCustomTitle: {
    color: STYLES.$COLORS.SECONDARY,
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
  },
  taggableUsersBox: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
    position: 'relative',
    backgroundColor: 'white',
    borderColor: STYLES.$COLORS.MSG,
    overflow: 'hidden',
  },
  taggableUserView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  disabledInput: {
    marginVertical: Platform.OS === 'android' ? 10 : 20,
    marginHorizontal: 10,
    paddingVertical: 10,
    minHeight: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    justifyContent: 'center',
    borderColor: STYLES.$COLORS.MSG,
    borderWidth: 1,
  },
  disabledInputText: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    color: STYLES.$COLORS.MSG,
  },
  alignItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    textAlign: 'center',
  },
  voiceRecorderInput: {
    marginHorizontal: 20,
    paddingVertical: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lockRecording: {
    backgroundColor: 'white',
    height: 150,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  linkPreviewImageView: {
    marginLeft: 10,
    marginTop: 10,
    width: '30%',
  },
  tapAndHold: {
    opacity: 0.8,
    backgroundColor: 'black',
    padding: 10,
    position: 'absolute',
    bottom: 80,
    right: 35,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  gifView: {
    backgroundColor: STYLES.$COLORS.MSG,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  gifText: {
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    fontSize: STYLES.$FONT_SIZES.SMALL,
    color: 'white',
    marginTop: Platform.OS === 'ios' ? 2 : 0,
  },
});
