import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './component/adminPanel/Login';
import Dashboard from './component/adminPanel/Dashboard';
import CategoryManagement from './component/adminPanel/CategoryManagement';
import SubCategoryManagement from './component/adminPanel/SubCategoryManagement';
import ProductManagement from './component/adminPanel/ProductManagement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Service from './pages/Service';
import CreateProduct from './component/adminPanel/CreateProduct';
import ProductDetails from './component/adminPanel/ProductDetails';
import EditProduct from './component/adminPanel/EditProduct';
import Signup from './component/adminPanel/Signup';
import Product from './pages/Product';
import AdminNav from './component/navbar/AdminNav';
import EnqueryDetails from './component/adminPanel/EnqueryDetails';
import Setting from './component/adminPanel/Setting';
import AdminSliderPage from './component/adminPanel/AdminSliderPage';
import FirstSignup from './component/FirstSignup';


import TopLine from './component/TopLine';
import FilterCalalougePage from './component/category/FilterCalalougePage';


function App() {

  return (
    <>
      <BrowserRouter>
        <TopLine />
        <Navbar />
        <AdminNav />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<About />} />
          <Route path='/products' element={<Product />} />
          {/* <Route path='/services' element={<Service />} /> */}
          <Route path='/contactUs' element={<Contact />} />
          <Route path='/products/:name' element={<FilterCalalougePage />} />
          <Route path="/first-admin/signup" element={<FirstSignup />} />

          {/* AdminPanel */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<CategoryManagement />} />
          <Route path="/subcategories" element={<SubCategoryManagement />} />
          <Route path="/productsManagement" element={<ProductManagement />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/customerEnquery" element={<EnqueryDetails />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/slider-handle" element={<AdminSliderPage />} />
        </Routes>
        
        <Footer />

      </BrowserRouter>
    </>
  );

}

export default App;
