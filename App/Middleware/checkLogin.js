const jwt = require('jsonwebtoken');
const User = require('../Model/User')

exports.checkLogin = async (req, res, next) => {
    let token;

    /** Authenicating token  */
    if (req.headers.authorization && req.headers.authorization.startsWith('Token')) {

        console.log("token :- ", req.headers.authorization)
         token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        console.log('token not found')
        return next(res.status(403).json({ 'msg': "Not Authorized" }))
    }

    try {
        /** if TOKEN is valid then verify token and user */
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return next(res.status(403).json({ 'msg': "User Not Found with This Id" }))
        }
        req.user = user; 
        next();
    } catch (error) {

        console.log(error);
        return next(error);


    }
}