import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu/Menu';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import OrderReview from './component/OrderReview/OrderReview';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='home' element={<Home></Home>} />
        <Route path='menu' element={<Menu></Menu>} />
        <Route path='orderreview' element={<OrderReview></OrderReview>} />
        <Route path='login' element={<Login></Login>} />
      </Routes>
      
    </div>
  );
}

export default App;

