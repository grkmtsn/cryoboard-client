import React from "react";
import { Switch, Route } from "react-router-dom";

import { Sidebar, Content, App as AppLayout } from "./layout";
import { Charts, ReportDetail, Reports } from "./pages";

function App() {
  return (
    <AppLayout>
      <Sidebar />
      <Content>
        <Switch>
          <Route path="/reports/:id">
            <ReportDetail />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/">
            <Charts />
          </Route>
        </Switch>
      </Content>
    </AppLayout>
  );
}

export default App;
