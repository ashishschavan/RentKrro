import './App.css';
import CategoriesComponent from './Components/Categories/CategoriesComponent';
import HeadNavComponent from './Components/HeadNavComponent/HeadNavComponent';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import RoutesComponent from './RoutesComponent';

function App() {
  const componentsData = [
    { id: 1, name: 'Component 1', img: '' },
    { id: 2, name: 'Component 2', img: '' },
    { id: 3, name: 'Component 3', img: '' },
    { id: 4, name: 'Component 4', img: '' },
    { id: 5, name: 'Component 5', img: '' },
    { id: 6, name: 'Component 6', img: '' },
    { id: 7, name: 'Component 7', img: '' },
    { id: 8, name: 'Component 8', img: '' },
    // Add more components as needed
  ];


  return (
    <div className="App ">
      <Router>
      <div>
        <HeadNavComponent />
        <CategoriesComponent />
      </div>
      <RoutesComponent />
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
