import { VFC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ClassicalFetchA } from "./components/ClassicalFetchA";
import { ClassicalFetchB } from "./components/ClassicalFetchB";
import { StateProvider } from "./context/StateProvider";
import { Layout } from "./components/Layout";
import { ReactQueryA } from "./components/ReactQueryA";
import { ReactQueryB } from "./components/ReactQueryB";
import { ContextA } from "./components/ContextA";
import { ContextB } from "./components/ContextB";
import { MainContext } from "./components/MainContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // フェッチ失敗した場合に自動でリトライすることを無効
      refetchOnWindowFocus: false, // 過剰なfetchの発生を無効
    },
  },
});

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <ReactQueryA />
              </Route>
              <Route exact path="/query-b">
                <ReactQueryB />
              </Route>
              <Route exact path="/fetch-a">
                <ClassicalFetchA />
              </Route>
              <Route exact path="/fetch-b">
                <ClassicalFetchB />
              </Route>
              <Route exact path="/context-a">
                <ContextA />
              </Route>
              <Route exact path="/context-b">
                <ContextB />
              </Route>
              <Route exact path="/main-context">
                <MainContext />
              </Route>
            </Switch>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
