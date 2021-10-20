import {Login, SignUp, Dashboard} from './pages';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          {/* <Route path="/pamper-them" component={Pamper-them}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/profile" component={Profile}/> */}
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

