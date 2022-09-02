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
      <Header />
      <Router>
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
