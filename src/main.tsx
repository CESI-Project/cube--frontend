import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import Francais from './languages/fr-FR.json';

const queryClient = new QueryClient();

const localLanguage: string = navigator.language;

let language;

if (localLanguage === 'fr-FR') {
  language = Francais;
}

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={localLanguage} messages={language}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
