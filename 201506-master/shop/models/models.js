var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = {
    User:{
        username:{type:String,required:true},
        password:{type:String,required:true},
        email:{type:String,required:true},
        avatar:String
    },
    Ware:{
        name:String,
        price:Number,
        img:String
    },
    Cart:{
        user:{type:ObjectId,ref:'User'},
        ware:{type:ObjectId,ref:'Ware'},
        num:Number
    }
}