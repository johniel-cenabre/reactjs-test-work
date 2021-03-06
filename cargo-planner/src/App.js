import './App.css'
import { ShipmentsContextProvider } from './context/ShipmentsContext'
import Header from './components/layouts/Header'
import Nav from './components/layouts/Nav'
import Main from './components/layouts/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Router>
        <ShipmentsContextProvider>
          <Header site="Cargo Planner" />
          <Nav />
          <Switch>
            <Route path="/:id" component={Main} />
            <Route path="/" component={Main} />
          </Switch>
        </ShipmentsContextProvider>
      </Router>
    </div>
  )
}

export default App
