import { VFC } from "react";

import "./App.css";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App: VFC = () => {
  return (
    <BrowserRouter>
      <Layout>App</Layout>
    </BrowserRouter>
  );
};

export default App;
