import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartItem from "./components/cart/CartItem";
import AddProduct from "./components/dashboard/addProduct/AddProduct";
import Menu from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import DetailsOfProduct from "./pages/ProductDetails";
function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route path="/productDetails/:id">
            <DetailsOfProduct />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/cart">
            <CartItem />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
