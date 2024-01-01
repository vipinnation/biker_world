const express = require('express');
const CategoryController = require('../App/Controller/CategoryController');
const loginController = require('../App/Controller/loginController');
const cartController = require('../App/Controller/CartController');
const productController = require('../App/Controller/poductController');
const signupController = require('../App/Controller/signupController');
const { checkLogin } = require('../App/Middleware/checkLogin');
const OrderController = require('../App/Controller/OrderController');
const AboutController = require('../App/Controller/AboutController');
const googlelogin = require('../App/Controller/GoogleLogin');
const reviewController = require('../App/Controller/reviewController')
const searchingController = require('../App/Controller/SearchingController')
const updateCartController = require('../App/Controller/UpdateCartController');
const addressController = require('../App/Controller/AddressController');
const forgotPassword = require('../App/Controller/ForgotPassword');
const referAndEarn = require('../App/Controller/ReferAndEarn');
const CouponController = require('../App/Controller/CouponController')
const route = express.Router();


/**
 *  ABOUT CONTROLLER
 *  */
route.post('/feedback', AboutController().about)


/**
 *  Coupon Controller
 */

 route.post('/applycoupon', CouponController().applyUserCoupon)
 route.post('/addcouponcode', checkLogin, CouponController().addCouponCode)
 route.post('/getAdminCoupon', checkLogin, CouponController().getAdminCoupon)
 route.post('/deleteadmincoupon', checkLogin, CouponController().deleteAdminCoupon)

/**
 *  AUTH CONTROLLER
 *  */
route.post('/login', loginController().index)
route.post('/signup', signupController().index)

route.post('/checkEmail', forgotPassword().checkEmail)
route.post('/forgotpassword/:token', forgotPassword().forgotPassword)

/** 
 * CHECK AUTH ROUTER
 * 
 *  */
route.get('/checkLogin', checkLogin, (req, res) => {
    console.log('Checking Auth Check Login Controller')

    const user = {
        email: req.user.email,
        name: req.user.name,
        role: req.user.role
    }
    res.send(user)
})


/**
 *   ADMIN CONTROLLER
 */
route.post('/admin/addproduct', checkLogin, productController().addProduct)
route.get('/admin/getProduct', checkLogin, productController().getProduct)

route.get('/admin/editproduct/:id', checkLogin, productController().editProduct)
route.post('/admin/editproduct/:id', checkLogin, productController().updateProduct)
route.get('/admin/delproduct/:id', checkLogin, productController().delProduct)
route.get('/getAdminOrder', checkLogin, OrderController().getAdminOrder)
route.post('/updateOrder', checkLogin, OrderController().updateOrder)
route.get('/getwithdrawrequest', checkLogin, referAndEarn().getWithdrawRequest)
route.post('/updatewithdrawrequest', checkLogin, referAndEarn().updateWithdrawRequest)
/**
 *      PRODUCT CONTROLLER
 */
route.get('/product/category/:id', CategoryController().getCategoryController)
route.get('/product/:id', CategoryController().getProduct)
route.get('/allproduct', productController().getAllProduct)

/**
 * 
 *   USER PROFILE CONTROLLER
 */
route.get('/getUserOrder', checkLogin, OrderController().getUserOrder)
route.get('/getOrderById/:id', checkLogin, OrderController().getOrderById)

/**
 *      REFER AND EARN CONTROLLER
 */

route.get('/successreferproduct', checkLogin, referAndEarn().getSuccessfullReferedProduct)
route.post('/withdrawamount', checkLogin, referAndEarn().withdrawReferAmount)


/**
 *  CART CONTROLLER
 */
route.post('/checkout', checkLogin, OrderController().checkOut)
route.post('/addToCart', cartController().addToCart)
route.get('/cart-item', cartController().cartItems)
route.post('/reduceCart/:id', updateCartController().reduceCartItem)
route.post('/increaseCart/:id', updateCartController().increaseCartItem)
route.post('/removeItemFromCart/:id', updateCartController().removeCartItem)
/**
 *  GOOGLE AUTH CONTROLLER 
 * 
*/
route.post('/googlelogin', googlelogin().loginByGoogle)

/**
 *   REVIEW CONTROLLER
 */
route.post('/addreview', reviewController().addReview)
route.get('/getreview/:id', reviewController().getProductReview)
route.get('/getfalsereview', checkLogin, reviewController().getFalseReview)
route.post('/updateUnverifiedReview/:productreview', checkLogin, reviewController().updateUnverifiedReview)



/**
 *   SEARCHING CONTROLLER
 */

route.get('/search/:id', searchingController().searchProduct)


/**
 *    ADDRESS CONTROLLER
 */
route.post('/addAddress', checkLogin, addressController().addAddress)
route.get('/getaddress', checkLogin, addressController().getAddress)



/**
 *  LOGOUT CONTROLLER
 */

route.get('/logout', (req, res) => {


    console.log("Logout Controller", req.session)
    req.session.user = null

})
module.exports = route