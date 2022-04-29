import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useApi } from '../hooks';

import { MessageType } from '../types';

const defaultValue = {
  loading: true,
  messages: [],
  error: null,
  refetch: () => {},
};
const MessagesContext = createContext<{
  loading: boolean;
  messages: Array<MessageType>;
  error: null | string;
  refetch: () => void;
}>(defaultValue);

const MessagesProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Array<MessageType>>([]);
  const [error, setError] = useState<null | string>(null);
  const api = useApi();

  const refetch = useCallback(async () => {
    setLoading(true);

    const { ok, data } = await api.get('/messages');
    setMessages(data as MessageType[]);
    setError(ok ? null : 'An error occured');
    setLoading(false);
  }, [api]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <MessagesContext.Provider value={{ loading, messages, error, refetch }}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };
