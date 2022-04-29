import { FC } from 'react';
import cx from 'classnames';

import { MessageType } from '../types';

const MessageItem: FC<Props> = ({ message, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={cx('message-item', { read: message.isRead })}
    >
      <h2>{message.subject}</h2>
      <p>{message.content}</p>
    </li>
  );
};

export { MessageItem };

interface Props {
  onClick?: () => void;
  message: MessageType;
}
