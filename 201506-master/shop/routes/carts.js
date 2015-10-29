var express = require('express');
var router = express.Router();
router.get('/list',function(req,res){
    Model('Cart').find({}).populate('user').populate('ware').exec(function(err,carts){
        if(err){
            return res.json({code:0,msg:"查询出错!"});
        }
        return res.json({code:1,carts:carts});
    });
});

module.exports = router;