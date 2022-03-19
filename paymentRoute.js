const express = require('express');
const router = express.Router();
const {createOrder} = require('./paymentController');


router.get('/createOrder',createOrder);



module.exports = router
