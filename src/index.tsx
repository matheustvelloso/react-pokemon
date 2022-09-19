import React, { Suspense } from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'services/i18n';

import { ThemeProvider } from 'styled-components';

import PokemonClient from 'services/PokemonClient';

import GlobalStyles from 'styles/GlobalStyles';

import { styledComponentsTheme } from 'theme';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ApolloProvider client={PokemonClient}>
        <ThemeProvider theme={styledComponentsTheme}>
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
);
