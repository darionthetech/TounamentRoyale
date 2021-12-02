import React from 'react';
import {  ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import User from '../src/pages/User';
import Contact from '../src/pages/Contact';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Home from '../src/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './components/NavTabs';




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
            <div className="flex-column justify-flex-start min-100-vh">
          <NavTabs />
              <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/me">
              <User />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
                </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/users/:userId">
              <User />
            </Route>
            </div>
            </Router>
           </ApolloProvider>
      );
  }

export default App;

