var express = require('express');
var router = express.Router();
router.get('/list',function(req,res){
    Model('Ware').find({},function(err,wares){
        if(err){
            return res.json({code:0,msg:"查询出错!"});
        }
        return res.json({code:1,wares:wares});
    });
});

router.get('/addCart/:_id',function(req,res){
    var cart = {num:1};
    cart.ware = req.params._id;
    cart.user = req.session.user._id;
    new Model('Cart')(cart).save(function(err,cart){
        if(err){
            return res.json({code:0,msg:"保存数据库出错!"});
        }
        return res.json({code:1,cart:cart});
    });
});

router.post('/add', function(req, res, next) {
    var ware = req.body;
    new Model('Ware')(ware).save(function(err,ware){
        if(err){
            return res.json({code:0,msg:"保存数据库出错!"});
        }
        return res.json({code:1,ware:ware});
    });
});
module.exports = router;