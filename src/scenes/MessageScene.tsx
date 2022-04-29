import { FC, useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { MessagesContext } from '../context';

const MessageScene: FC = () => {
  const params = useParams();
  const { messages, loading, error, refetch } = useContext(MessagesContext);
  const message = useMemo(
    () => messages.find((m) => m._id === params.messageId),
    [messages, params.messageId]
  );

  if (loading) {
    return (
      <div className='container'>
        <small>Loading...</small>
      </div>
    );
  }

  if (error || !message) {
    return (
      <div className='container text-center'>
        <p>{error}</p>
        <button onClick={refetch}>Try again</button>
      </div>
    );
  }

  return (
    <div className='message container'>
      {loading ? (
        <small>Loading...</small>
      ) : (
        <>
          <h1>{message?.subject}</h1>
          <p>{message?.content}</p>
        </>
      )}
    </div>
  );
};

export { MessageScene };
