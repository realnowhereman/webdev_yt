import './App.css';

import Header from './Header';
import Main from './Main';
import About from './About';
import Users from './Users';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import UserId from './UserId';
import Error from './Error';
// import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
      <nav>
        <li><NavLink to="/">Main</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </nav>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route  path='/users' element={<Users />} />
          <Route  path='/users/:userName' element={<UserId />} />
          <Route path='*'  element={<Error />} />
        </Routes>
      </Router>

    </>
  )
}
export default App;
