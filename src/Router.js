import { Route, Switch } from "wouter";
import { Home } from "./pages";

const Router = () => {
  return (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);}

export default Router;
