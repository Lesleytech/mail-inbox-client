import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { AuthProvider, MessagesProvider } from './context';
import {
  HomeScene,
  InboxScene,
  MessageScene,
  PageNotFoundScene,
} from './scenes';

const App: FC = () => {
  return (
    <AuthProvider>
      <MessagesProvider>
        <Router>
          <div className='app'>
            <Header />
            <main>
              <Routes>
                <Route path='/' element={<HomeScene />} />
                <Route path='/inbox' element={<InboxScene />} />
                <Route path='/inbox/:messageId' element={<MessageScene />} />
                <Route path='*' element={<PageNotFoundScene />} />
              </Routes>
            </main>
          </div>
        </Router>
      </MessagesProvider>
    </AuthProvider>
  );
};

export default App;
