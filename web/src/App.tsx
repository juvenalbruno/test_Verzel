import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Modules } from './pages/Modules';
import { Login } from './pages/Login';

import { Global } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
    <Global />
      <Switch>
        <Route path="/modules" component={Modules} />
        <Route path="/" component={Login} exact />
      </Switch> 
    </BrowserRouter>
  );
}
