const { OAuth2Client } = require('google-auth-library')
const User = require('../Model/User')
const bcrypt = require('bcrypt')
const client = new OAuth2Client(process.env.OAUTH_ID)

const googlelogin = () => {
    return {

        /**Controller for GOOGLE LOGIN  */
        loginByGoogle(req, res) {
            console.log("google login controller")

            const { tokenId } = req.body
            client.verifyIdToken({ idToken: tokenId, audience: process.env.OAUTH_ID })
                .then(response => {
                    const { email_verified, email, name } = response.payload
                    if (email_verified) {
                        User.findOne({ email }).then(data => {
                            /** if USER already registered in database with this Email */
                            if (data) {
                                console.log("Data ", data)
                                return sendToken(data, 201, res)
                            }
                            else {
                                console.log('User Not Registered')
                                const hashPassword = bcrypt.hashSync('vipin@1998', 10)
                                /**Adding USER in database with this email */
                                const googleUser = new User({
                                    email: email,
                                    name: name,
                                    password: hashPassword
                                })

                                googleUser.save().then(result => {
                                    console.log("Saved Data")
                                    return sendToken(result, 201, res)

                                }).catch(err => {
                                    return res.status(403).json({ 'msg': "Something Went Wrong" })
                                })


                            }
                        }).catch(err => {
                            return res.status(403).json({ 'msg': "Something Went Wrong" })
                        })
                    }


                }).catch(err => console.log(err))
        }
    }
}



function sendToken(User, statusCode, res) {
    const token = User.isSignedToken();
    res.status(201).json({ 'token': token, 'msg': 'success', 'role': User.role })
}

module.exports = googlelogin