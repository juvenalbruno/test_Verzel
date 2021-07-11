import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AdminAula } from './pages/AdminAula';

import { AdminHome } from './pages/AdminHome';
import { AdminModulesAulas } from './pages/AdminModulesAulas'
import { Login } from './pages/Login';
import { Modules } from './pages/Modules';
import { Register } from './pages/Register';

import { PrivateRoute } from './utils/PrivateRouter';

import './styles/global.scss';


export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin/module/aula" component={AdminAula}/>
        <PrivateRoute path="/admin/module" component={AdminModulesAulas} exact/>
        <PrivateRoute path="/admin" component={AdminHome} exact />
        
        <Route path="/user/register" component={Register} />
        <Route path="/user/login" component={Login} />
        <Route path="/" component={Modules} exact />
      </Switch> 
    </BrowserRouter>
  );
}
