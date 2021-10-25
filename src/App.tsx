import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';




function App() {

  return (
    <BrowserRouter>
      <Switch>
          {/*<Route path="/contact" component={Contact}/>*/}
          <Route path="/profile" component={Profile}/> 
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  ); 
}

export default App;

