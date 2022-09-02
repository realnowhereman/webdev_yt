import './App.css';

import Header from './Header';
import Main from './Main';
import About from './About';
import Users from './Users';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header /> */}

      <Router>
        <nav>
          <li><Link to={'/'}>Main</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/users'}>Users</Link></li>
        </nav>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Router>

    </>
  )
}
export default App;
