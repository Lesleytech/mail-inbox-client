import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext, MessagesContext } from '../context';
import { getNumOfUnreadMsges } from '../helpers';

const HomeScene = () => {
  const { loading, messages, error, refetch } = useContext(MessagesContext);
  const user = useContext(AuthContext);
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
    <div className='home container'>
      <h1>Welcome back {user.name}</h1>
      <p>You have {getNumOfUnreadMsges(messages)} unread message(s)</p>
      <button onClick={() => navigate('/inbox')}>Read now</button>
    </div>
  );
};

export { HomeScene };
