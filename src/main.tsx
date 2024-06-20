import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import store from '@/shared/stores/store';
import App from './app/app';

import { BrowserRouter } from 'react-router-dom';
import SuspenseContent from '@/shared/components/suspens-content';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<SuspenseContent />}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
