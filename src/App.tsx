import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './store/store';
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Home/>
        </QueryClientProvider>
      </Provider>
  );
};

export default App;
