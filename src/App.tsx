import { VFC } from "react";

import "./App.css";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";

import { ClassicalFetchA } from "./components/ClassicalFetchA";
import { ClassicalFetchB } from "./components/ClassicalFetchB";

const App: VFC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Switch>
            <Route exact path="/fetch-a">
              <ClassicalFetchA></ClassicalFetchA>
            </Route>
            <Route exact path="/fetch-b">
              <ClassicalFetchB></ClassicalFetchB>
            </Route>
          </Switch>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  );
};

export default App;
