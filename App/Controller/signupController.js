const User = require('../Model/User')
const bcrypt = require('bcrypt')
const SendEmail = require('../Middleware/Email')

module.exports = () => {
    return {
        /** ADDING USER TO DATABASE */
        index(req, res) {

            console.log("Signup COntroller")
            const { name, emailLowerCase, password } = req.body

            User.findOne({ email: emailLowerCase }, (err, data) => {
                if (err) throw err;

                if (data) {
                    console.log("User Already Registered", data);
                    return res.status(202).json({ "msg": "User Already Registered" })
                }

                console.log("User Not Registered With This Email");
                const hashedPassword = bcrypt.hashSync(password, 10)
                const userData = new User({
                    name: name, email: emailLowerCase, password: hashedPassword
                })

                userData.save().then(async (result) => {
                    console.log("Result after Saving", result);
                    const fileName = 'Create'
                    const subject = "Account Created Successfully"
                    const emailStatus = await SendEmail(emailLowerCase, fileName, subject, null)

                    return res.status(201).json({ "msg": "User Registered Successfully" })

                }).catch(err => {
                    console.log("Error While Saving Data ", err);
                    return res.status(201).json({ "msg": "Something Went Wrong" })
                })
            })

        }
    }
}