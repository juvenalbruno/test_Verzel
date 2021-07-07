import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Modules } from './pages/Modules';
import { Register } from './pages/Register';

import './styles/global.scss'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/modules" component={Modules} />
        <Route path="/user/register" component={Register} />
        <Route path="/" component={Home} exact />
      </Switch> 
    </BrowserRouter>
  );
}
