import cx from 'classnames';
import { FC, useContext } from 'react';
import { RiMessage3Line, RiUserLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { MessagesContext } from '../context';
import { getNumOfUnreadMsges } from '../helpers';

const Header: FC = () => {
  const { messages } = useContext(MessagesContext);
  const numUnreadMsges = getNumOfUnreadMsges(messages);

  return (
    <header>
      <Link to='/' className='brand'>
        InboxAppDemo
      </Link>
      <div>
        <Link to='/inbox'>
          <span>
            <RiMessage3Line />
            <small className={cx({ unread: numUnreadMsges > 0 })}>
              {numUnreadMsges} unread
            </small>
          </span>
        </Link>
        <span>
          <RiUserLine />
          <small>John Doe</small>
        </span>
      </div>
    </header>
  );
};

export { Header };
