import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Stats from "./views/Stats/Stats";

import "./App.module.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Stats} exact />
      </Switch>
    </div>
  );
};

export default App;
