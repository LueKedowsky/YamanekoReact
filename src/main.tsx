import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import ScrollToTop from 'utils/ScrollToTop';
import ReleasesDataContextProvider from 'context/ReleasesDataContextProvider';
import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <React.StrictMode>
      <ReleasesDataContextProvider>
        <App />
      </ReleasesDataContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
