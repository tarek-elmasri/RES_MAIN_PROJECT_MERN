import Login from "../containers/Auth/Login";
import AdminPanel from '../containers/AdminPanel/AdminPanel'

export default [
  {
    path: '/',
    exact: true,
    protect: 'user',
    component: () => <Login />
  },
  {
    path: '/adminPanel',
    exact: true,
    protect: 'private',
    component: () => <AdminPanel />
  },
]