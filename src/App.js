import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import InventoryManagement from './components/InventoryManagement/InventoryManagement';
import OrderReview from './components/OrderReview/OrderReview'
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Shop />
          </Route>

          <Route path='/shop'>
            <Shop />
          </Route>

          <Route path='/order-review'>
            <OrderReview />
          </Route>

          <Route path='/inventory-management'>
            <InventoryManagement />
          </Route>

          <Route path="/place-order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
      <ScrollToTop />
    </div>
  );
}

export default App;
