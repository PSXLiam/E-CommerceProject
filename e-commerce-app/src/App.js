import './App.css';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import BodyHome from './BodyHome';
import BodyProducts from './BodyProducts';
import BodyProduct from './BodyProduct';
import { BodyCart } from './BodyCart';
import BodyHelp from './BodyHelp';
import { useState } from 'react'; //Allow the use of useState
import BigScreen from './BigScreen.jpg'
import SmallScreen from './SmallScreen.jpg'

function App() {

  const [currentPage, setCurrentPage] = useState("Home") //useState to store what page is currenly in the body
  const [products, setProducts] = useState([
    {
        image: BigScreen,
        name: "Big Screen",
        description: "Its a big screen",
        price: 21.99
    },
    {
        image: SmallScreen,
        name: "Small Screen",
        description: "Its a small screen",
        price: 11.99
    }
  ]) //useState containing all the products for the app.

  const [productIndex, setProductIndex] = useState (0) //const for holding index of product

  const [cartState, setCartState] = useState ([]) //const to hold the content of the cart
  
  const [totalPrice, setTotalPrice] = useState (0.00) //const for holding total price of users order

  return (
    <div className="App">
      <header className="App-header">
            <AppHeader setCurrentPage={setCurrentPage} totalPrice={totalPrice}/> {/*load AppHeader to top of page*/}
              <div className='AppBody'> {/*div for main body of the app*/}
              {/*A series of shorthand if statements to allow conditonal rendering */}
                {currentPage == "Home" && 
                  <BodyHome setCurrentPage={setCurrentPage}/>
                }
                {currentPage == "Products" &&
                  <BodyProducts setCurrentPage={setCurrentPage} products={products} setProductIndex={setProductIndex}/>
                }
                {currentPage == "Product" &&
                  <BodyProduct products={products} totalPrice={totalPrice} setTotalPrice={setTotalPrice} productIndex={productIndex} cartState={cartState} setCartState={setCartState}/>
                }
                {currentPage == "Cart" &&
                  <BodyCart totalPrice={totalPrice} cartState={cartState}/>
                }
                {currentPage == "Help" &&
                  <BodyHelp/>
                }
              </div>
            <AppFooter setCurrentPage={setCurrentPage}/> {/*load AppFooter to bottom of page*/}
      </header>
    </div>
  );
}

export default App;
