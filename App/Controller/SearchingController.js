const Product = require('../Model/Product')

const searchingController = () => {
    return {
        searchProduct(req, res) {
            console.log("Searching Controller", req.params.id)

            let searchProductByUpperCase = req.params.id.toUpperCase()
            let serachProductByLowerCase = req.params.id.toLowerCase()

            let searchParameter = [
                { productName: { '$regex': searchProductByUpperCase } },
                { productDescription: { '$regex': serachProductByLowerCase } },
                { productCategory: { '$regex': serachProductByLowerCase } },
                { productSearchingTags: { '$regex': serachProductByLowerCase } },
                { productEditon: { '$regex': serachProductByLowerCase } },
                { productPublisher: { '$regex': serachProductByLowerCase } },

            ]


            Product.find({ $or: searchParameter }).then(data => {
                res.status(200).json(data)
            }).catch(err => {
                console.log(err)
                res.status(40).json(err)
            })
        }
    }
}

module.exports = searchingController
