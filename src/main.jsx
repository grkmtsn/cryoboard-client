import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import App from "./App";
import Store from "./context/global";
import MyTheme from "./theme/ThemeProvider";

const client = new ApolloClient({
  uri: "http://134.122.85.131/",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <MyTheme>
          <Store>
            <App />
          </Store>
        </MyTheme>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
