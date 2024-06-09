const express = require('express');

// advanced version of getting destructured.. destructured in the object with name authController, 
// and we can fetch all the modules exported wrapped inside object,
// we receive those modules in authController, and can be used to target those modules.. such as authController.home etc
const authController = require('../controllers/auth-controller');
// this is how it works when we export is from another file in the form of object, it gets destructured here
// const {home, register,users} = require('../controllers/auth-controller');

const router = express.Router();

// navigates to api/auth home i.e, =  http://localhost:3000/api/auth
router.get('/', authController.home)

// this is the way of writing the routes using controllers
router.route('/users').get(authController.users)// get means to read the data

router.route('/register').post(authController.register)// post means to insert, to post the data to the database


// this is used to export this router to use it in server.js with name router
module.exports = router;