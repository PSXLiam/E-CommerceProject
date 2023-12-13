import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import BodyHome from './BodyHome';
import BodyHelp from './BodyHelp';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  // const [products, setProducts] =  useState(["screen 1", "screen 2"])

  return (
    <div className="App">
      <header className="App-header">
            <AppHeader/>
              <div className='AppBody'>
                {currentPage == 1 &&
                  <><BodyHome/></>
                }
                {currentPage == 2 &&
                  <><BodyHelp/></>
                }
              </div>
            <AppFooter/>
      </header>
    </div>
  );
}

export default App;
