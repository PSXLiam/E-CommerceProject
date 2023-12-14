import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import BodyHome from './BodyHome';
import BodyProducts from './BodyProducts';
import BodyProduct from './BodyProduct';
import BodyHelp from './BodyHelp';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState("Home")
  const [products, setProducts] = useState([
    {
        image: "BigScreen",
        name: "Big Screen",
        description: "Its a big screen",
        price: 21.99
    },
    {
        image: "",
        name: "Small Screen",
        description: "Its a small screen",
        price: 11.99
    }
  ])
  const [totalPrice, setTotalPrice] = useState (0.00)

  return (
    <div className="App">
      <header className="App-header">
            <AppHeader setCurrentPage={setCurrentPage} totalPrice={totalPrice}/>
              <div className='AppBody'>
                {currentPage == "Home" &&
                  <BodyHome setCurrentPage={setCurrentPage}/>
                }
                {currentPage == "Products" &&
                  <BodyProducts setCurrentPage={setCurrentPage} products={products}/>
                }
                {currentPage == "Product" &&
                  <BodyProduct products={products} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                }
                {currentPage == "Help" &&
                  <BodyHelp/>
                }
              </div>
            <AppFooter setCurrentPage={setCurrentPage}/>
      </header>
    </div>
  );
}

export default App;
