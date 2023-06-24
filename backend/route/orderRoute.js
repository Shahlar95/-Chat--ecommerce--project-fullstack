const router = require('express').Router();
const Order = require('../models/Order');
const User = require('../models/User');


//creating an order

router.post('/', async(req,res)=>{
    const {userId, cart, country, address} = req.body;

    try{
        const user = await User.findById(userId);
        const order = await Order.create({owner: user._id, products: cart,country,address});
        order.count = cart.count;
        order.total = cart.total;
        await order.save();
        user.cart = {total:0, count:0};
        user.orders.push(order);
    } catch (e) {

        
    }
})