import { create } from 'apisauce';
import { useContext, useMemo } from 'react';

import { AuthContext } from '../context';

const useApi = () => {
  const user = useContext(AuthContext);

  const api = useMemo(
    () =>
      create({
        baseURL: '/api',
        headers: {
          'x-user-id': user._id,
        },
      }),
    [user._id]
  );

  return api;
};

export { useApi };
