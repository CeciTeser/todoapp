import Login from './pages/Login';
import {SignUp} from './pages/SignUp';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import EditTasks from './pages/EditTasks';
import { AuthProvider } from './Context';





function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
            {/*<Route path="/contact" component={Contact}/>*/}
            {/* <Route path="/categories" component={Categories}/>  */}
            <Route path="/dashboard" component={Dashboard}/> 
            <Route path="/edit-task" component={EditTasks}/> 
            <Route path="/profile" component={Profile}/> 
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  ); 
}

export default App;

