import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloProvider} from "react-apollo"
import ApolloClient from "apollo-boost";

import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cklqvhoe1vr3p01z27mh161ja/master"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
