import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from './reset';
import theme from './theme';
import store from './store';
import App from './containers/App';
import ScrollToTop from './components/ScrollToTop';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500');

  html, body {
    font-family: ${props => props.theme.fonts.main};
    font-weight: ${props => props.theme.fontWeights.regular};
    color: ${props => props.theme.colors.greys.dark};
    background: ${props => props.theme.colors.greys.extraLight};
  }
`;

const Index = () => (
  <Router>
    <ScrollToTop>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyles />
            <Route
              path="/:page?"
              render={({ match }) => {
                let { page } = match.params;

                if (page) {
                  page = parseInt(page, 10);
                } else {
                  page = 0;
                }

                return <App page={page} />;
              }}
            />
          </Fragment>
        </ThemeProvider>
      </Provider>
    </ScrollToTop>
  </Router>
);

render(<Index />, document.getElementById('root'));
