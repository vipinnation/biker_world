const Review = require('../Model/Review')

const reviewController = () => {

    return {
        /** POST req for PRODUCT review */
        addReview(req, res) {

            console.log('Add review Controller')

            const { productId, name, email, review } = req.body

            if (!name || !email || !review) {
                return res.status(203).json({ 'msg': 'All Field Required' })
            }
            const saveReview = new Review({
                product: productId,
                name,
                email,
                review,
                isVerified: false
            })

            saveReview.save().then(result => {
                console.log(result)
                return res.status(200).json({ 'msg': 'Thanks For Review' })
            }).catch(err => {
                console.log(err)
                return res.status(200).json({ 'msg': 'Something went wrong' })
            })
        },
        /** GET req for product */
        getProductReview(req, res) {

            console.log('Get Review Controller')
            Review.find({ product: req.params.id, isVerified: true }).then(data => {
                console.log("Data get Review ", data)
                if (data) {
                    return res.status(200).json({ 'review': data })
                }
                return res.status(200)
            }).catch(err => {
                console.log(err)
                return res.status(400)
            })
        },

        /** GET req for verfiying PRODUCT REVIEW */
        getFalseReview(req, res) {
            console.log("Get Not Verified Review controller")

            Review.find({ isVerified: false }).then(data => {
                console.log(data)
                return res.status(200).json({ 'review': data })
            }).catch(err => {
                console.log(err)
            })
        },

        /**POST req for updating ethical review by PRODUCT ID */
        updateUnverifiedReview(req, res) {
            console.log('Update unverified COntroller')

            Review.findByIdAndUpdate(req.params.productreview, { isVerified: Boolean(req.body.verifyStatus) }).then(data => {

                return res.status(200)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}


module.exports = reviewController