import React from 'react';
// import { ApolloClient, ApolloProvider } from '@apollo/client';
import MainContainer from './components/MainContainer';
// const client = new ApolloClient({
//     request: (operation) => {
//       const token = localStorage.getItem("id_token");
  
//       operation.setContext({
//         headers: {
//           authorization: token ? `Bearer ${token}` : "",
//         },
//       });
//     },
//     uri: "/graphql",
//   });

  function App() {
      return (
          // <ApolloProvider client={client}>
            <MainContainer />
              
          // </ApolloProvider>
      );
  }

export default App;