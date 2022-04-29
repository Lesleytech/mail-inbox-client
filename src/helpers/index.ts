import { MessageType } from './../types/index';

export const getNumOfUnreadMsges = (msgs: MessageType[]) => {
  return msgs.filter((msg) => !msg.isRead).length;
};
