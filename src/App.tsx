import { useState } from "react";
import { Nav } from "./component";
import {Login, SignUp, Dashboard} from './pages';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

