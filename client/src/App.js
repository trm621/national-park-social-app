import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donation from "./pages/Donation";
import Landing from "./pages/Landing";
//import Profile from "./pages/Profile";
import SinglePost from "./pages/SinglePost";
import NoMatch from "./pages/NoMatch";
import UserMain from "./pages/UserMain";
//import { Provider } from 'react-redux';
//import store from './utils/store';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/donations" element={<Donation />} />
              <Route path="/singlepost/:id" element={<SinglePost />} />
              <Route path="/usermain/:username?" element={<UserMain />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
