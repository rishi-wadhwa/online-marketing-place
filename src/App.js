import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import ProductsLoad from './components/ProductsLoad';
import Search from './components/search';
import NotFound from "./components/NotFound";
import Login from './components/Layout/Login';
import Register from './components/Layout/Register';
import Cart from './components/Layout/Cart';

function Main(){


  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="products/:id" element={<ProductsLoad />} />
            <Route path="search/:SearchName" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>        
    </>
  )
}

export default Main;