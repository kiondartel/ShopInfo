import React from "react";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";

import store from "./store";
import Router from "./routes";

const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
