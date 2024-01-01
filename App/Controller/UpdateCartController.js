const updateCartController = () => {
    return {
        increaseCartItem(req, res) {

            console.log('Increase Cart Item Controller')
            console.log('increase item')
            console.log('Params', req.params.id)
            console.log('Incre Product  ', req.body)

            let cart = req.session.cart

            cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
            cart.totalQty = cart.totalQty + 1;
            cart.totalAmount = cart.totalAmount + Number(req.body.productPrice);
            res.json(req.session)

        },
        reduceCartItem(req, res) {
            console.log('Reduce Item Controller')

            let cart = req.session.cart


            /*** Item is equal to 1 */
            if (cart.items[req.body._id].qty == 1) {
                console.log('item Quantity is eqaul to 1')

                /*** Cart quantity is eqaul to 1  */
                if (cart.totalQty == 1) {
                    console.log('Total Qty is eqaul to 1')

                    delete req.session.cart
                    return res.json(req.session.cart)
                }

                /*** Cart quantity is greater than 1 */
                console.log('Total qty is greater than 1')
                delete cart.items[req.body._id]
                cart.totalQty = cart.totalQty - 1
                cart.totalAmount = cart.totalAmount - Number(req.body.productPrice)
                return res.json(req.session.cart)

            }


            /** Item is greater than 1 */
            console.log('Item quantity is greater than 1')

            cart.items[req.body._id].qty = cart.items[req.body._id].qty - 1;
            cart.totalQty = cart.totalQty - 1;
            cart.totalAmount = cart.totalAmount - Number(req.body.productPrice);

            return res.json(req.session.cart)
        },
        removeCartItem(req, res) {

            let cart = req.session.cart
            console.log('Remove Item From Cart Controller')

            if (cart.totalQty >= 1 && Object.keys(cart.items).length == 1) {

                console.log('Cart total quanity is greater than 1 and items length is equal to 1')
                delete req.session.cart
                return res.json(req.session.cart)
            }

            console.log('Cart total quantity is greater than 1 and items length is greater than 1', Object.keys(cart.items).length)

            cart.totalQty = cart.totalQty - cart.items[req.params.id].qty
            cart.totalAmount = cart.totalAmount - (cart.items[req.body._id].qty * req.body.productPrice)
            delete cart.items[req.params.id]
            return res.json(req.session.cart)


        }
    }
}


module.exports = updateCartController