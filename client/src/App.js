import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import NavbarMenu from './components/NavBarMenu';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct'
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu></NavbarMenu>
        <Routes>
          <Route exact path = "/" Component={ShowProducts}/>
          <Route exact path = "/addProduct" Component={AddProduct}/>
          <Route exact path = "/:id/" Component={ProductDetail}/>
          <Route exact path = "/:id/update" Component={UpdateProduct}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
