import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Feed from './pages/Feed';
import Login from './pages/Login';
import Signup from './pages/Signup';
//import Nav from './components/Nav';
import { Provider } from 'react-redux';
//import store from './utils/store';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Provider store={store}>
          <Nav />
          <p>Test</p>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/donation" component={DonationForm} />
            <Route exact path="/post" component={PostForm} />
            <Route component={NoMatch} />
          </Switch>
        </Provider>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;