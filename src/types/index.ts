export interface UserType {
  _id: number;
  name: string;
  email: string;
}

export interface MessageType {
  _id: string;
  subject: string;
  content: string;
  isRead: boolean;
  senderId: number;
  receiverId: number;
  timestamp: Date;
}
