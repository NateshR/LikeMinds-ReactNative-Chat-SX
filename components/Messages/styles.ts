import {StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  messageParent: {
    margin: 20,
    marginVertical: 10,
  },
  message: {
    padding: 10,
    // margin: 10,
    maxWidth: '80%',
    // width:'80%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: '#fff',
    minWidth: 100,
    // backgroundColor: 'green',
    // elevation: 20,
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
  },
  statusMessage: {
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: STYLES.$COLORS.JOINED_BTN,
  },
  replyMessage: {
    padding: 10,
    // margin: 10,
    // maxWidth: '80%',
    width: '80%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    backgroundColor: '#fff',
    // elevation: 2,
    // display: 'flex',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: STYLES.$COLORS.TERTIARY,
    borderBottomRightRadius: 0,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: STYLES.$COLORS.TERTIARY,
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.SECONDARY,
    // maxWidth: '80%',
    // textAlign: 'left',
  },
  messageInfo: {
    color: 'green',
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.BOLD,
    marginBottom: STYLES.$MARGINS.XS,
  },
  messageCustomTitle: {
    color: STYLES.$COLORS.MSG,
    fontSize: STYLES.$FONT_SIZES.SMALL,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
  },
  messageDate: {
    fontSize: 10,
    color: '#aaa',
    // marginTop: 5,
    textAlign: 'right',
  },
  typeSent: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    borderColor: 'transparent',
    borderWidth: 10,
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
    borderBottomColor: STYLES.$COLORS.TERTIARY,
    borderLeftColor: STYLES.$COLORS.TERTIARY,
  },
  typeReceived: {
    position: 'absolute',
    bottom: 0,
    left: -10,
    borderColor: 'transparent',
    borderWidth: 10,
    borderBottomColor: STYLES.$COLORS.TERTIARY,
    borderRightColor: STYLES.$COLORS.TERTIARY,
    // borderBottomColor: 'pink',
    // borderRightColor: 'pink',
  },
  deletedMsg: {
    color: STYLES.$COLORS.MSG,
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    fontStyle: 'italic',
  },
  reactionReceivedParent: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    gap: 5,
  },
  reactionSentParent: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    gap: 5,
  },
  reaction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: STYLES.$COLORS.TERTIARY,
    borderRadius: 15,
  },
  moreReaction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: STYLES.$COLORS.TERTIARY,
    borderRadius: 15,
  },
  alignMessage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
