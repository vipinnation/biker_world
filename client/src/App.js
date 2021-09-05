import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginComponent from './Component/AuthComponent/LoginComponent';
import SignupComponent from './Component/AuthComponent/SignupComponent';
import CartComponent from './Component/PublicComponent/CartComponent';

import HomeComponent from "./Component/PublicComponent/HomeComponent";
import ProductComponent from './Component/PublicComponent/ProductComponent';
import Footer from "./Component/Utility/Footer";
import Navbar from "./Component/Utility/Navbar";
import OrderComponent from './Component/ProfileComponent/OrderComponent';
import AdminComponent from './Component/AdminComponent/AdminComponent';
import CategoryCompnent from './Component/PublicComponent/CategoryCompnent';
import PrivateRoute from './Component/Utility/PrivateRoute';
import AdminRoute from './Component/Utility/AdminRoute';
import AddProduct from './Component/AdminComponent/AddProduct';
import AdminProduct from './Component/AdminComponent/AdminProduct';
import EditProduct, { DelProduct } from './Component/AdminComponent/EditandDelProduct'
import AboutComponent from './Component/PublicComponent/AboutComponent';
import OrderStatus from './Component/ProfileComponent/OrderStatus';
import VerifyReview from './Component/AdminComponent/VerifyReview';
import NotFound from './Component/Utility/NotFound';
import AllProductComponent from './Component/PublicComponent/AllProductComponent';
import Payment from './Component/Utility/Payment'
import SearchResultComponent from './Component/PublicComponent/SearchResultComponent';
import CheckOutComponent from './Component/PublicComponent/CheckOutComponent';
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
        <AdminRoute exact path='/admin/editproduct/:editProductId' component={EditProduct} />
        <AdminRoute exact path='/admin/delproduct/:delProductId' component={DelProduct} />
        <AdminRoute exact path="/admin/verifyreview" component={VerifyReview} />
        <AdminRoute exact path="/admin/withdrawrequest" component={WithDrawRequest} />



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
      <Footer />
    </>
  );
}

export default App;
