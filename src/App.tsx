import {LoginPage} from './pages/LoginPage'
import {SignUpPage} from './pages/SignUpPage';
import CategoriesPage from './pages/CategoriesPage';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import EditTasks from './pages/EditTasks';
import { AuthProvider } from './context';
import { ContactPage } from './pages/Contact';





function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/categories" component={CategoriesPage}/> 
            <Route path="/dashboard" component={Dashboard}/> 
            <Route path="/edit-task" component={EditTasks}/> 
            <Route path="/profile" component={Profile}/> 
            <Route path="/sign-up" component={SignUpPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  ); 
}

export default App;

