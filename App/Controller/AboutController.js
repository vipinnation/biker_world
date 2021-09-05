const About = require('../Model/about')

module.exports = function aboutController() {
    return {

        /**
         *  POST req , saving FEEDBACK
         */
        about(req, res) {
            console.log("About Controller")

            const saveAbout = new About(req.body)

            saveAbout.save().then(data => {
                console.log(data)
                return res.status(200).json({ 'msg': 'Success' })
            }).catch(err => {
                console.log(err)
            })

        }
    }
}