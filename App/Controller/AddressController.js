const Address = require('../Model/UserAddress')
const Cart = require('../Model/Cart')
const addressController = () => {
    return {
        getAddress(req, res) {

            console.log("Findone Address Controller")
            Address.findOne({ user: req.user._id }, (err, data) => {

                let customer = {
                    id: req.user._id,
                    email: req.user.email
                }

                if (err) throw err;
                if (!data) {
                    return res.status(200).json({ 'msg': 'Please Add Address', customer })
                }

                return res.status(200).json({ 'address': data, customer })


            })
        },
        addAddress(req, res) {


            console.log("save User Address controller ")
            const { name, streetAddress, state, city, pinCode, mobileNumber } = req.body
            if (req.body._id) {
                console.log('address Already present')

                Address.findByIdAndUpdate(req.body._id, { name, streetAddress, state, city, pinCode, mobileNumber }).then(data => {
                    console.log('Address Updated which is alredy present')
                }).catch(err => {
                    console.log(err)
                })
                return res.status(200)
            }
            else {
                console.log('Address not present in database')

                const saveAddress = new Address({
                    user: req.user._id, name, streetAddress, state, city, pinCode, mobileNumber
                })

                saveAddress.save().then(savedData => {
                    console.log("New Address Saved in Database")
                }).catch(err => {
                    console.log(err)
                })
                return res.status(200)
            }

        },
        editAddress(req, res) {

            console.log('Edit User Address Controller')
            Address.findById(req.params.id, (err, data) => {
                if (err) throw err;
                console.log(data)
                return res.status(201).json({ 'address': data })
            })
        },
        updateAddress(req, res) {

            console.log('Update User Address Controller')
            const id = req.params.id;

            const { name, userAddress, locality, city, pinCode, mobileNumber } = req.body
            const updateData = new Address()

            Address.findByIdAndUpdate(req.params.id, {
                name, address: userAddress, locality, city, pinCode, mobile: mobileNumber
            }, (err, data) => {
                if (err) throw err;
                if (data) {
                    return res.status(200).json({ 'msg': 'Success' })
                }
            })
        },
        delAddress(req, res) {

            
            console.log('Delete User Address Controller')
            console.log(req.params.id)

            Address.findByIdAndRemove(req.params.id, (err, data) => {
                if (err) throw err;
                if (data) {
                    return res.status(200).json({ 'msg': "Address Deleted Successfully" })
                }
            })
        }
    }
}




module.exports = addressController