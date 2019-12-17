import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Temprature from "./Temprature/Temptrature";
import CustomImage from "./ImageCustom/CustomImage";
import CelebMain from "./Celebs/CelebMain";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
        <Link to="/celebrities">Celebrities</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" component={Temprature} />
        <Route path="/customize-image" component={CustomImage} />
        <Route path="/celebrities" component={CelebMain} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
