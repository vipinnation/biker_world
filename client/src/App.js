import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FloatingWhatsApp from 'react-floating-whatsapp'
import 'react-floating-whatsapp/dist/index.css'

// Middleware
import AdminRoute from './Middleware/AdminRoute';
import PrivateRoute from './Middleware/PrivateRoute';

// UI
import Footer from "./UI/Footer";
import Navbar from "./UI/Navbar";

// Auth Routes
import LoginComponent from './Component/AuthComponent/LoginComponent';
import SignupComponent from './Component/AuthComponent/SignupComponent';


import CartComponent from './Component/CartComponent/CartComponent';
import CheckOutComponent from './Component/CartComponent/CheckOutComponent';

import HomeComponent from "./Component/PublicComponent/HomeComponent";
import ProductComponent from './Component/PublicComponent/ProductComponent';

import OrderComponent from './Component/ProfileComponent/OrderComponent';
import AdminComponent from './Component/AdminComponent/AdminComponent';
import CategoryCompnent from './Component/PublicComponent/CategoryCompnent';
import AddProduct from './Component/AdminComponent/AddProduct';
import AdminProduct from './Component/AdminComponent/AdminProduct';
import AboutComponent from './Component/PublicComponent/AboutComponent';
import OrderStatus from './Component/ProfileComponent/OrderStatus';
import VerifyReview from './Component/AdminComponent/VerifyReview';
import NotFound from './Component/Utility/NotFound';
import AllProductComponent from './Component/PublicComponent/AllProductComponent';
import Payment from './Component/Utility/Payment'
import SearchResultComponent from './Component/PublicComponent/SearchResultComponent';
import ForgotPassword from './Component/AuthComponent/ForgotPassword';
import UpdateForgotpassword from './Component/AuthComponent/UpdateForgotpassword';
import Blog from './Component/BlogComponent/Blog';
import ReferAndEarn from './Component/ProfileComponent/ReferAndEarn';
import ReferManagement from './Component/ProfileComponent/ReferManagement';
import WithDrawRequest from './Component/AdminComponent/WithDrawRequest';
import ShippingPolicy from './Component/PolicyComponent/ShippingPolicy';
import PrivacyPolicy from './Component/PolicyComponent/PrivacyPolicy';
import TermsAndCondition from './Component/PolicyComponent/TermsAndCondition';
import ReturnPolicy from './Component/PolicyComponent/ReturnPolicy';
import ReactChat from './Component/Utility/ReactChat'
import AdminCoupon from './Component/AdminComponent/AdminCoupon';
import EditProductComponent from './Component/AdminComponent/EditProductComponent';
import DeleteProductComponent from './Component/AdminComponent/DeleteProductComponent';
import CategoryListComponent from './Component/Category/CategoryListComponent';
import ShopByBrandComponent from './Component/Utility/ShopByBrandComponent';

function App() {
  return (
    <>
      <Navbar />

      <Switch>

        {/* Public Routes */}
        <Route exact path='/' component={HomeComponent} />
        <Route exact path="/about" component={AboutComponent} />
        <Route exact path="/cart" component={CartComponent} />
        <Route exact path='/category/:id' component={CategoryCompnent} />
        <Route exact path='/search/:id' component={SearchResultComponent} />

        <Route exact path='/allproduct' component={AllProductComponent} />
        <Route exact path='/shopbybrand' component={ShopByBrandComponent} />

        {/*Auth Routes */}
        <Route exact path="/signup" component={SignupComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path='/forgotpassword' component={ForgotPassword} />
        <Route exact path='/updateforgotpassword/:id' component={UpdateForgotpassword} />

        {/** Profile Routes */}
        <PrivateRoute exact path='/profile' component={OrderComponent} />
        <PrivateRoute exact path="/profile/order/:id" component={OrderStatus} />
        <PrivateRoute exact path='/profile/refer-earn' component={ReferAndEarn} />
        <PrivateRoute exact path='/profile/refer-manage' component={ReferManagement} />


        {/* Admin Routes */}
        <AdminRoute exact path="/admin" component={AdminComponent} />
        <AdminRoute exact path='/admin/addproduct' component={AddProduct} />
        <AdminRoute exact path='/admin/product' component={AdminProduct} />
        <AdminRoute exact path='/admin/editproduct/:editProductId' component={EditProductComponent} />
        <AdminRoute exact path='/admin/delproduct/:delProductId' component={DeleteProductComponent} />
        <AdminRoute exact path="/admin/verifyreview" component={VerifyReview} />
        <AdminRoute exact path="/admin/withdrawrequest" component={WithDrawRequest} />
        <AdminRoute exact path="/admin/admincoupon" component={AdminCoupon} />

        {/** Category Component */}
        <Route exact path='/categorylist' component={CategoryListComponent} />

        {/* Product Route */}
        <Route exact path="/product/:id" component={ProductComponent} />


        <Route exact path="/payment" component={Payment} />


        <PrivateRoute exact path='/checkout' component={CheckOutComponent} />


        {/** Policy Routes */}
        <Route exact path='/privacypolicy' component={PrivacyPolicy} />
        <Route exact path='/t&c' component={TermsAndCondition} />
        <Route exact path='/returnpolicy' component={ReturnPolicy} />
        <Route exact path='/shippingpolicy' component={ShippingPolicy} />

        {/* * Testing Route */}
        <Route exact path="/test" component={Blog} />

        <Route path='*' component={NotFound} />
      </Switch>
      <FloatingWhatsApp phoneNumber='917222040429' accountName='Kustom Parts' statusMessage='Have A Query' />
      <Footer />
    </>
  );
}

export default App;
