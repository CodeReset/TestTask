import React from "react";

import { Switch, Route } from "react-router-dom";

import Authentification from "../pages/Authentification";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import EditAddPage from "../pages/EditAddPage";

const Navigator = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/auth" component={Authentification} />
      <Route path="/addedit" component={EditAddPage} />
      <Route render={() => <ErrorPage />} />
    </Switch>
  );
};
export default Navigator;
