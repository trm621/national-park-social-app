import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/header';
import Footer from './components/footer';

import Feed from './pages/Feed';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Donation from './pages/Donation';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import SinglePost from './pages/SinglePost';
import NoMatch from './pages/NoMatch';
// import { Provider } from 'react-redux';
// import store from './utils/store';


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
    <ApolloProvider client={client}>
     <Router>
       <div>
         {/* <Provider store={store}> */}
           <Switch>
             <Route exact path="/" component={Feed} />
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/donation" component={Donation} />
             <Route exact path="/profile" component={Profile} />
             <Route exact path="/home" component={Landing} />
             <Route exact path="/singlepost" component={SinglePost} />

             <Route component={NoMatch} />
           </Switch>
         {/* </Provider> */}
       </div>
     </Router>
   </ApolloProvider>
  );
}

export default App;