import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import OrderReview from './components/OrderReview/OrderReview'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import MyOrders from './components/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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

            <Route path='/my-orders'>
              <MyOrders />
            </Route>

            <PrivateRoute path="/place-order">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="/Register">
              <Register />
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
      <ScrollToTop />
    </div>
  );
}

export default App;
