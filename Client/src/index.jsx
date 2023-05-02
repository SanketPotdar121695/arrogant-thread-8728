import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { theme } from './utils/theme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
