import App from './App'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import NotFound from './pages/NotFound/NotFound'

export default [
  {
    component: App,
    routes: [
      {
        component: Auth,
        path: '/',
        exact: true
      },
      {
        component: Home,
        path: '/home'
      },
      {
        component: NotFound,
      }
    ]
  }
]
