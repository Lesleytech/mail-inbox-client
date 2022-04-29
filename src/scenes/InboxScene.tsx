import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MessageItem } from '../components';
import { MessagesContext } from '../context';

const InboxScene: FC = () => {
  const { messages, loading, error, refetch } = useContext(MessagesContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className='container'>
        <small>Loading...</small>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container text-center'>
        <p>{error}</p>
        <button onClick={refetch}>Try again</button>
      </div>
    );
  }

  return (
    <div className='inbox container'>
      <h1>Messages</h1>

      <ul className='inbox-list'>
        {messages.map((m) => (
          <MessageItem
            message={m}
            key={m._id}
            onClick={() => navigate(`/inbox/${m._id}`)}
          />
        ))}
      </ul>
    </div>
  );
};

export { InboxScene };
