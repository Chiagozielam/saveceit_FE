import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { Provider } from "react-redux";
import store from "./store";
import { Menu, Icon, Layout } from "antd";
import Navbar from "./components/Navbar"

const { Header, Content, Footer } = Layout;
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/dashboard/"
              render={props => <Dashboard {...props} />}
            />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
