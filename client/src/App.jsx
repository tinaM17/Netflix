import './app.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/movies" exact element={<Home type="movies" />} />
          <Route path="/series" exact element={<Home type="series" />} />
          <Route path="/watch" exact element={<Watch />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
