import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminPanel from './AdminPanel/AdminPanel';
import Login from './Auth/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/adminPanel' component={() => <AdminPanel />} />
        <Route path='/' exact component={() => <Login />} />
      </Switch>
    </Router>
  );
}

export default App;
