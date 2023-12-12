import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import BodyHome from './BodyHome';
import { useState } from 'react';

function App() {

// const [products, setProducts] =  useState(["screen 1", "screen 2"])

  return (
    <div className="App">
      <header className="App-header">
            <AppHeader/>
            <BodyHome/> 
            <AppFooter/>
      </header>
    </div>
  );
}

export default App;
