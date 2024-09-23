import "./App.css";
import {Routes ,Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { Box } from "@mantine/core";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import ConfirmCode from "./pages/confirmCodePage/ConfirmCode";
import SingleProduct from "./pages/singleProduct/SingleProduct";
function App() {
  return (
    <>
      <Header/>
      <Box className="style">
        <Routes>
          <Route path="*" Component={ErrorPage} />
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/products/:id" Component={SingleProduct} />
          <Route path="/about" Component={About} />
          <Route path="/sign-up" Component={Signup} />
          <Route path="/confirm-code" Component={ConfirmCode} />
          <Route path="/login" Component={Login} />
        </Routes>

      </Box>
      <Footer/>
    </>
  );
}

export default App;
