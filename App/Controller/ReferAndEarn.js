const Order = require('../Model/Orders')
const ReferWithdrawAmount = require('../Model/ReferWithdrawAmount')
const referAndEarn = () => {
    return {
        getSuccessfullReferedProduct(req, res) {

            Order.find({ referCode: req.user.email }).then(data => {

                console.log('Refer Management Controller')
                let amount = 0;
                if (data) {

                    data.map(e => {
                        amount = amount + (e.totalAmount - e.shippingCharge)
                    })
                    let earnedAmount = amount * (2 / 100)
                    res.status(200).json({ 'refer': data, 'totalAmount': earnedAmount })
                    return
                }

                res.status(200).json({ 'msg': 'You not reffered any Product' })
            }).catch(err => {
                console.log(err)
                res.status(200).json({ 'msg': 'Something Went Wrong' })
            })
        },
        withdrawReferAmount(req, res) {
            console.log('Withdraw Refer Amount Controller')
            const { name, amount, ifscCode, bankAccountNumber, confBankAccountNumber } = req.body.userData
            const totalAmount = req.body.totalAmount

            ReferWithdrawAmount.find({ user: req.user.email }).then(data => {

                const saveData = new ReferWithdrawAmount({
                    user: req.user.email,
                    name, amount, ifscCode, bankAccountNumber
                })
                console.log(data)
                /**When Withdraw request for first Time */
                if (data.length <= 0) {
                    console.log('Previous Withdrawn Record Not Found')
                    saveData.save().then(result => {
                        res.status(200).json({ 'msg': 'Request Submitted Successfully' })
                        return
                    }).catch(err => {
                        console.log('Save Order Error', err)
                        res.status(400).json({ 'msg': 'Something Went Wrong' })
                        return
                    })
                }

                /** When Withdrawn Request For more than 1 Time */
                console.log('Previous Record Withdrawn Found')
                let withdrawnAmount = 0;
                data.map(e => {
                    withdrawnAmount = withdrawnAmount + Number(e.amount)
                })

                const withdrawLimit = totalAmount - withdrawnAmount

                if (withdrawLimit <= amount) {
                    console.log('Withdrawn request is greater than withdraw Amount ')
                    res.status(200).json({ 'msg': `Withdraw Limit Reached , Available Amount ${withdrawLimit}` })
                    return
                }


            }).catch(err => {
                console.log(err)
                res.status(400).json({ 'msg': 'Something Went Wrong' })
            })
        },

        getWithdrawRequest(req, res) {
            console.log('Withdraw Request Controller')
            ReferWithdrawAmount.find().then(data => {
                res.status(200).json(data)
            }).catch(err => {
                console.log(err)
                res.status(400).json({ 'msg': 'Something Went Wrong' })
            })


        }

        , updateWithdrawRequest(req, res) {
            console.log('Update Withdraw Request Controller')
            console.log(req.body)
            const updateStatus = req.body.status

            ReferWithdrawAmount.findByIdAndUpdate(req.body.product._id, {
                status: updateStatus
            }).then(data => {
                res.status(200).json({ 'msg': 'Updated Successfully' })
            }).catch(err => [
                res.status(400).json({ 'msg': 'Something Went Wrong' })
            ])
        }
    }
}


module.exports = referAndEarn