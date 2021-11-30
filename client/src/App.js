// import React from 'react';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// // import BookingList from './components/BookingList';
// import Booking from '../src/pages/Booking';
// import Contact from '../src/pages/Contact';
// import Login from '../src/pages/Login';
// import Home from '../src/pages/Home';
// // import MainContainer from './components/MainContainer';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
//   function App() {
//       return (
//           <ApolloProvider client={client}>
//             <Router>
//               <Route exact path="/">
//                 <Home />
//             {/* <MainContainer /> */}
//             {/* <BookingList /> */}
//             </Route>
//             <Route exact path="/me">
//               <Booking />
//               </Route>
//               <Route exact path="/login">
//                 <Login />
//               </Route>
//               <Route exact path="/contact">
//                 <Contact />
//               </Route>
//               <Route exact path="/users/:userId">
//               <Booking />
//             </Route>
//             </Router>
//            </ApolloProvider>
//       );
//   }

// export default App;

import React from 'react';
import {  ApolloProvider } from '@apollo/client';
import MainContainer from './components/MainContainer';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem("id_token");
  
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    },
    uri: "/graphql",
  });

  function App() {
      return (
          <ApolloProvider client={client}>
            <MainContainer />
              
           </ApolloProvider>
      );
  }

export default App;