const Cart = require("../Model/Cart");
const Product = require("../Model/Product")

const cartController = () => {
    return {
        /**SAVING CART ITEM IN SESSION */
        addToCart(req, res) {

            console.log("Add to Cart COntroller", req.body)


            if (!req.session.cart) {

                req.session.cart = {

                    items: {},
                    referCode: req.body.referCode || null,
                    totalQty: 0,
                    shippingCharge: Number(50),
                    totalAmount: 50,
                }
            }


            let cart = req.session.cart;

            if (!cart.items[req.body._id]) {
                cart.items[req.body._id] = {
                    items: req.body,
                    qty: 1
                };

                cart.totalQty = cart.totalQty + 1;

                cart.totalAmount = cart.totalAmount + Number(req.body.productPrice);
            }

            else {
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
                cart.totalQty = cart.totalQty + 1;
                cart.totalAmount = cart.totalAmount + Number(req.body.productPrice);
            }


            res.json({ totalQty: req.session.cart.totalQty })
            console.log("Cart Total Amount", cart.totalAmount)

        },
        /**
         * 
         *   req FROM cart page 
         *  res to cart page with items in req.session.cart 
         * @returns  CART ITEMS
         */
        async cartItems(req, res) {
            console.log('Get Cart items controller')

            const arr = new Array();

            if (req.session.cart) {

                for (let item of Object.values(req.session.cart.items)) {
                    arr.push(item)
                }

                return res.status(200).json({ 'cart': req.session.cart, 'Array': arr })
            }
            else {
                return res.status(200).json({ 'msg': 'Cart Is Empty' })
            }
        }
    }
}


module.exports = cartController