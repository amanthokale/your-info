const Razorpay = require('razorpay');
const uniqid = require('uniqid');



var instance = new Razorpay({ key_id: process.env.R_KEY_ID, key_secret: process.env.R_KEY_SECRET  })




exports.createOrder=(req,res)=>{
  instance.orders.create({
    amount: 50000,
    currency: "INR",
    receipt: uniqid(),
    notes: {
      key1: "value3",
      key2: "value2"
    }
  }).then(){

  }.catch(error){
    
  }
}
