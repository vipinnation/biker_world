const Product = require("../Model/Product")

const CategoryController = () => {
    return {
        /** Get PRODUCTS BY speicified Category */
        getCategoryController(req, res) {
            console.log("Get Product by category controller")

            Product.find({ productCategory: { '$regex': req.params.id } }, null, { sort: { 'createdAt': '-1' } }).then(data => {
                return res.status(200).json({ 'product': data })
            }).catch(err => {
                console.log(err);
                return res.status(400).json({ 'msg': 'Something Went Wrong' })
            })
        },

        /** Get PRODUCT by ID */
        getProduct(req, res) {

            console.log("Get product by id controller ")

            let searchProduct = [
                { _id: req.params.id },
                { productSlug: req.params.id }
            ]
            Product.findOne({ productSlug: req.params.id }).then(data => {
                return res.status(200).json({ 'product': data })
            }).catch(err => {
                console.log(err)
                return res.status(200).json({ 'msg': 'Something Went Wrong' })
            })
        }
    }
}


module.exports = CategoryController