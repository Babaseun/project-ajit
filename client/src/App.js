import Login from './components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Payment from './components/Payments/Payment';
import Register from './components/Registration/Register';
import Product from './components/Product/Product';

import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import MainMap from './components/Map/MainMap';

function App() {
  return (
    <div className="main">
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={MainMap} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/register" component={Register} />
        <PrivateRoutes exact path="/map" component={MainMap} />
        <PrivateRoutes exact path="/products" component={Product} />
      </Router>
    </div>
  );
}
export default App;
