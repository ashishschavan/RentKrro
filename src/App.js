import logo from './logo.svg';
import './App.css';
import RegisterComponent from './Components/Register/RegisterComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginComponent from './Components/Login/LoginComponent';
import HomeComponent from './Components/Home/HomeComponent';
function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid ">
              <div className='col'>
                <Link className="navbar-brand"  to="/">
                  RentKrro
                </Link>
              </div>
              <div className='col-6 d-flex'>
                <input className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success mr-1" type="submit">Search</button>
              </div>
              <div className="collapse navbar-collapse justify-content-end col" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/signup">Register</Link>
                  </li>
                </ul>
              </div>
          </div>
        </nav>

        <Routes>
          <Route path="/signup" element={<RegisterComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/home" element={<HomeComponent />}></Route>

        </Routes>
      </Router>
      <footer className="text-center text-lg-start bg-light text-muted footer-setter">



        <div className="text-center p-4" >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
