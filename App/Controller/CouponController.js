const Coupon = require('../Model/CouponCode')


const CouponController = () => {

    return {
        applyUserCoupon(req, res) {
            console.log('Apply User Code', req.body)
            Coupon.findOne({ couponName: req.body.coupon }).then(data => {
                if (data) {

                    /** For Flat Coupon Type */
                    if (data.couponType === 'Flat') {
                        console.log('Percentage Coupon Code')

                        couponObject = {
                            couponName: req.body.coupon,
                            discountAmount: data.couponDiscountAmount
                        }
                        let cart = req.session.cart;
                        cart.couponCode = couponObject
                        cart.totalAmount = cart.totalAmount - Number(data.couponDiscountAmount);

                        res.status(200).json({ 'msg': 'Coupon Applied Successfully' })
                        return
                    }

                    /** For Percentage Coupon Type */
                    if (data.couponType === 'Percentage') {
                        console.log('Percentage Coupon Code')

                        let cart = req.session.cart;
                        let percentageDeductedAmount = (cart.totalAmount * data.couponDiscountPercentage) / 100 ;

                        couponObject = {
                            couponName: req.body.coupon,
                            discountAmount: percentageDeductedAmount
                        }
                        console.log('Coupon Code ', couponObject)
                        cart.couponCode = couponObject
                        cart.totalAmount = cart.totalAmount - Number(percentageDeductedAmount);

                        res.status(200).json({ 'msg': 'Coupon Applied Successfully' })
                        return
                    }

                    return
                }
                if (!data) {
                    res.status(200).json({ 'msg': 'Coupon Invalid' })
                    return
                }
            })
        },
        addCouponCode(req, res) {
            console.log('Add Coupon Code Controller', req.body);

            const { couponName, couponDiscountAmount, couponType, couponDiscountPercentage } = req.body;

            Coupon.findOne({ couponName }).then(data => {
                if (data) {
                    res.status(200).json({ 'msg': 'Coupon Already Present' })
                    return
                }
                if (!data) {

                    const addCoupon = new Coupon(req.body)

                    addCoupon.save().then(data => {
                        res.status(200).json({ 'msg': 'Coupon Added Successfully' })
                        return
                    }).catch(err => {
                        console.log(err)
                        res.status(400).json({ 'msg': 'Something went wrong' })
                        return
                    })

                }
            }).catch(err => {
                console.log(err)
                res.status(400).json({ 'msg': 'Something went wrong' })
                return
            })
        },
        getAdminCoupon(req, res) {
            console.log('Get Admin Coupon Controller')

            Coupon.find().then(data => {
                res.status(200).json({ 'coupon': data })
                return
            }).catch(err => {
                console.log(err)
                res.status(400).json({ 'msg': 'Something Went Wrong' })
                return
            })
        },
        deleteAdminCoupon(req, res) {
            console.log("Delete Admin Coupon Controller")


            Coupon.findByIdAndRemove(req.body._id).then(data => {
                res.status(200).json({ 'msg': 'Coupon Deleted Successfully' })
                return
            }).catch(err => {
                console.log(err)
                res.status(400).json({ 'msg': 'Something Went Wrong' })
                return
            })
        }
    }
}

module.exports = CouponController
