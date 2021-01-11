import Login from './components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Payment from './components/Payments/Payment';
import Register from './components/Registration/Register';
import Product from './components/Product/Product';

import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import MainMap from './components/Map/MainMap';
import AdminRegister from './components/Registration/AdminRegister';
import AdminLogin from './components/Login/AdminLogin';
import PrivateRoutesForAdmin from './components/PrivateRoutes/PrivateRoutesForAdmin';

function App() {
  return (
    <div className="main">
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin-login" component={AdminLogin} />

        <Route exact path="/" component={MainMap} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/admin-register" component={AdminRegister} />

        <PrivateRoutes exact path="/map" component={MainMap} />
        <PrivateRoutesForAdmin exact path="/products" component={Product} />
      </Router>
    </div>
  );
}
export default App;
