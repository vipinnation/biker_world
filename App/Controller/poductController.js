
const Product = require('../Model/Product')

const productController = () => {

    /*** controller for PRODUCT  */
    return {
        /** Adding PRODUCT  in database */
        addProduct(req, res) {
            console.log('Add product controller', req.body.productApplicableModel)

            const secondaryImages = splitWords(req.body.productSecondaryImage)
            const ApplicableModel = splitWords(req.body.productApplicableModel)
            const secondaryCategory = splitWords(req.body.productSecondaryCategory)

            const addProduct = new Product({
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                productCategory: req.body.productCategory,
                productSecondaryCategory: secondaryCategory,
                productRegularPrice: req.body.productRegularPrice,
                productDescription: req.body.productDescription,
                productImage: req.body.productImage,
                productSecondaryImage: secondaryImages,
                productPdf: req.body.productPdf,
                productSearchingTags: req.body.productSearchingTags,
                productPublisher: req.body.productPublisher,
                productEdition: req.body.productEdition,
                productLanguage: req.body.productLanguage,
                productSlug: req.body.productSlug,
                productApplicableModel: ApplicableModel,
                productPopularItem: req.body.productPopularItem
            });

            addProduct.save().then(data => {
                console.log("product added");
                return res.status(200).json({ 'msg': "Product Added Successfully" })
            }).catch(err => {
                console.log(err);
                return res.status(200).json({ "msg": 'Something Went Wrong' })
            })
        },
        /** Get All PRODUCT from database */
        getProduct(req, res) {

            console.log("Get Product Controller For Admin")
            Product.find((err, data) => {
                if (err) throw err;

                if (data) {
                    return res.status(200).json({ 'product': data })
                }

                if (!data) {
                    return res.status(200).json({ 'msg': 'Product Not Found' })
                }
            })
        },
        /**  sending PRODUCT detail for which to be update
         */
        editProduct(req, res) {
            console.log('Edit Product Controller');

            Product.findOne({ _id: req.params.id }).then(data => {
                res.status(200).json({ 'product': data })
            }).catch(err => {
                console.log(err);
                res.status(200).json({ 'msg': 'Something Went Wrong' })
            })
        },
        /** POST REQ for UPDATE PRODUCT by PRODUCT ID*/
        updateProduct(req, res) {

            console.log('Update Product Controller', req.body.productApplicableModel)
            const secondaryImages = splitWords(req.body.productSecondaryImage)
            const ApplicableModel = splitWords(req.body.productApplicableModel)
            const secondaryCategory = splitWords(req.body.productSecondaryCategory)



            const updateproduct = {
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                productRegularPrice: req.body.productRegularPrice,
                productCategory: req.body.productCategory,
                productSecondaryCategory: secondaryCategory,
                productDescription: req.body.productDescription,
                productImage: req.body.productImage,
                productSecondaryImage: secondaryImages,
                productPdf: req.body.productPdf,
                productSearchingTags: req.body.productSearchingTags,
                productPublisher: req.body.productPublisher,
                productEdition: req.body.productEdition,
                productLanguage: req.body.productLanguage,
                productSlug: req.body.productSlug,
                productApplicableModel: ApplicableModel,
                productPopularItem: req.body.productPopularItem

            }

            Product.findByIdAndUpdate(req.params.id, updateproduct).then(data => {
                console.log(data)
                return res.status(200).json({ 'msg': 'Success' })
            }).catch(err => {
                console.log(err);
                return res.status(200).json({ 'msg': 'Something Went Wrong' })
            })

        },

        /** remove PRODUCT from database by product id */
        delProduct(req, res) {

            console.log('Delete Product Controller')
            Product.findByIdAndRemove(req.params.id).then(data => {
                return res.status(200).json({ 'msg': 'Success' })
            }).catch(err => {
                console.log(err)
                return res.status(400).json({ 'msg': 'Something Went Wrong' })
            })
        },
        /** all PRODUCT list  */
        getAllProduct(req, res) {
            console.log("All Product Controller");

            Product.find().then(data => {
                console.log('All Product List')
                return res.status(200).json(data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

}


const splitWords = (data) => {
    console.log('Data Word', data)
    if (data == undefined && data == '') {
        console.log('undefined')
        return null

    }

    if (data && data.length > 1) {
        console.log('Data Length', data.length)
        console.log('Data split ', data.split(','))
        const words = data.split(',')
        return words
    }

}

module.exports = productController