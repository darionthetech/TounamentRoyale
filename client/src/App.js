import React from 'react';
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
              <Router>
                 <>

                 </> 
              </Router>
          </ApolloProvider>
      );
  }

export default App;