const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id : {
        type: String
    },
    title: {
        type: String,
        text:true
    },
    category: {
        type: String,
        text:true
    },
    brand: {
        type: String,
        text:true
    },      
    mrp:{
        type:String,
        default:null
    },
    price:{ 
        type: String,
        default:'Price unavailable',
        text:true
    },
    rating: {
        type: String,
        default:'Rating unavailable'
    },
    count: {
        type: String,
        default: null
    },
    description:{
        type: String,
        default:'Description unavailable'
    },
    landingimage: {
        type: String
    },
    allimage:{
        type: String
    },
    link:{
        type: String
    },
    status:{
        type: String,
        default:'inactive'
    }
},{
    timestamps : true
})

const Product = mongoose.model('newlist', productSchema);
module.exports = Product;