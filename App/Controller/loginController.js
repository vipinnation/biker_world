const User = require("../Model/User");
const bcrypt = require('bcrypt')

function loginController() {
    return {
        /** controller for LOGIN , auth from DATABASE */
        index(req, res) {
            const { email, password } = req.body
            console.log("Login Controller");
            const emailLowerCase = email.toLowerCase();

            User.findOne({ email: emailLowerCase }, (err, data) => {
                if (err) throw err;

                if (data) {
                    console.log("Data Found In DataBase ");

                    if (bcrypt.compareSync(password, data.password)) {
                        console.log('Password Matched')
                        req.session.user = {
                            userId: data._id, userEmail: data.email
                        }
                        
                        return sendToken(data, 201, res)
                    }
                    else {
                        console.log('Password Not Matched')
                        return res.status(200).json({ 'msg': 'Password Incorrect' })
                    }
                }

                if (!data) {
                    console.log("User Not FOund ", data)
                    return res.status(200).json({ 'msg': "User Not Registered" })
                }
            })
        }
    }
}


function sendToken(User, statusCode, res) {
    const token = User.isSignedToken();
    res.status(201).json({ 'token': token, 'msg': 'success', 'role': User.role })
}

module.exports = loginController