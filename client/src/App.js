import './App.css';
import Users from './Components/Users';
import Form from './Components/Form';
import { ApolloProvider, InMemoryCache, HttpLink , from, ApolloClient } from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const errorLink = onError(({graphqlErrors, networkError}) => {
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    })
  }
});

const link = from([
  errorLink, 
  new HttpLink({
    uri : 'http://localhost:6969/graphql'
  }),
]);

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : link,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client = {client}>
        <h2>GraphQL in React JS</h2>
          <Form />
          <Users />
      </ApolloProvider>
    </div>
  );
}

export default App;
