function SendEmail(userEmail, fileName, subjectDetail , info) {
    const nodemailer = require('nodemailer')
    const ejs = require('ejs')
    const path = require('path')
    const fs = require('fs')

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    })
    console.log('DirName ', __dirname)
    ejs.renderFile(__dirname + `/EmailViews/${fileName}.ejs`,{input : info}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var mainOptions = {
                from:'<span> Hirola',
                to:userEmail,
                subject: subjectDetail,
                html: data
            };

            transporter.sendMail(mainOptions).then(result => {
                console.log(result)
                return result.response
            }).catch(err => {
                console.log(err)
                return null
            })
        }

    });

}


module.exports = SendEmail