import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import BodyHome from './BodyHome';
import BodyProducts from './BodyProducts';
import BodyProduct from './BodyProduct';
import BodyHelp from './BodyHelp';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState("Products")
  // const [products, setProducts] =  useState(["screen 1", "screen 2"])

  return (
    <div className="App">
      <header className="App-header">
            <AppHeader/>
              <div className='AppBody'>
                {currentPage == "Home" &&
                  <BodyHome/>
                }
                {currentPage == "Products" &&
                  <BodyProducts/>
                }
                {currentPage == "Product" &&
                  <BodyProduct/>
                }
                {currentPage == "Help" &&
                  <BodyHelp/>
                }
              </div>
            <AppFooter/>
      </header>
    </div>
  );
}

export default App;
