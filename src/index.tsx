import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'services/i18n';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/GlobalStyles';

import { styledComponentsTheme } from 'theme';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ThemeProvider theme={styledComponentsTheme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
);
