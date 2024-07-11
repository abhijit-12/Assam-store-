import './App.css';
import { Navbar } from './Compponents/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSigneup } from './Pages/LoginSigneup';
import { Footer } from './Compponents/Footer/Footer';
import men_banner from './Compponents/Assets/banner_mens.png';
import women_banner from './Compponents/Assets/banner_women.png';
import kids_banner from './Compponents/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='' element={<Shop/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path="product" element={<Product />}>
            <Route path=':prductId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSigneup />} />
          
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );

}


export default App;
