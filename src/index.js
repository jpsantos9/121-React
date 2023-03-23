import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { ThemeContext, themes } from './context';

const Home = lazy(() => import('./Screens/Home'));
const About = lazy(() => import('./Screens/About'));
const ShoppingList = lazy(() => import('./Screens/ShoppingList'));

// This is the root component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    {/* The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. */}
    <ThemeContext.Provider value={themes.light}>
      {/* Routers is used to separate diffrent screen using thier url */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<NavBar />}>
              {/* the routes below are all the individual screens  */}
              <Route index element={<Home/>} /> 
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<ShoppingList user="Paolo" />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeContext.Provider>
  </div>
  
);
