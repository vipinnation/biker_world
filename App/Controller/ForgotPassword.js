const User = require('../Model/User')
const jwt = require('jsonwebtoken')
const secretToken = 'joidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTYyNDAwMDg0NiwiZXhwIjoxNjI0MDg3MjQ2fQ'
const bcrypt = require('bcrypt') 
const SendEmail = require('../Middleware/Email')

const forgotPassword = () => {
    return {
        checkEmail(req, res) {
            console.log("Check Email for forgot Controller")

            User.findOne({ email: req.body.userEmail }).then(data => {

                if (data) {
                    console.log("Forgot data password found")
                    const forgotToken = jwt.sign({ id: data._id, email: data.email }, secretToken, { expiresIn: process.env.JWT_EXPIRE })
                    console.log('Forgot Token', forgotToken)
                    let subjectDetail = 'Please Reset Password'
                    const sendData = {
                        username: data.name,
                        token: forgotToken
                    }
                    SendEmail(data.email, 'ForgotPassword', subjectDetail, sendData)
                    return res.status(200).json({ 'msg': 'Forgot link is sent to registered email' })
                }

                return res.status(200).json({ 'msg': 'User not registered ' })
            }).catch(err => {
                console.log(err)
            })
        },

        async forgotPassword(req, res) {
            console.log('Forgot Password Controller')
            try {
                const decoded = jwt.verify(req.params.token, secretToken)

                const user = await User.findById(decoded.id)
                const hashPassword = bcrypt.hashSync(req.body.userPassword, 10)

                User.findByIdAndUpdate(decoded.id, { password: hashPassword }).then(result => {
                    return res.status(200).json({ 'msg': 'Password Updated Successfully' })
                }).catch(err => {
                    res.status(200).json({ 'msg': 'Something Went Wrong' })
                    console.log('inside ' ,err)
                    return
                })
            } catch (error) {
                res.status(200).json({ 'msg': 'Something Went Wrong' })
                console.log('error' ,error)
               
                return 
            }
        }
    }
}


module.exports = forgotPassword