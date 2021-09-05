const express = require('express');
const dotEnv = require('dotenv').config('./.env')
const router = require('./Route/Web')
const paymentRoute = require('./Route/PaymentRoute')
const mongoose = require('mongoose')
const path = require('path')
const app = express();
const cors = require('cors')
const ejs = require('ejs')
const razorpayRouter = require('./Route/RazorpayRoute');



/**
 *  MONGO DATABASE SETUP
 * 
 */
mongoose.connect(process.env.DBurl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected SuccessFully"))
    .catch((err) => console.log("DataBase Not Connected ", err))


const session = require('express-session');
const mongoConnect = require('connect-mongo')(session)

const mongoStore = new mongoConnect({
    mongooseConnection: mongoose.connection,
    collection: "sessions"
})


// CONFIGURING TEMPLATE ENGINE

app.set('view engine', 'ejs')
// configuring session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },

}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


/** Configuring API and ROUTES */
app.use('/api', router)
app.use('/api', paymentRoute)
app.use('/api', razorpayRouter)


/**
 * MIDDLEWARE
 */
app.use((req, res, next) => {

    res.locals.session = req.session;
    res.locals.user = req.user;
    next()
})


/**
 * Joining REACT and NODEJS
 */
app.use(express.static('client/build'));
app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})


/**
 * PORT
 */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server Running on Port : ${PORT}`))



/**
 *
 * jGYXfZ92536068810891
 * BHBGTyyAeHjmMyYt
 */


/**
 * echo "# KustomParts" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kustomparts/KustomParts.git
git push -u origin main
 */