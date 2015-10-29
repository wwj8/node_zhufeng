var express = require('express');
var router = express.Router();

router.post('/reg', function(req, res, next) {
  var user = req.body;
  if(user.password != user.repassword){
    return res.json({code:0,msg:"密码和重复密码不相等"});
  }
  delete user.repassword;
  user.password = md5(user.password);
  user.avatar = "https://secure.gravatar.com/avatar/"+md5(user.email)+'?s=48';
  new Model('User')(req.body).save(function(err,user){
    if(err){
      return res.json({code:0,msg:"保存数据库出错!"});
    }
    req.session.user = user;
    return res.json({code:1,msg:"注册成功"});
  });
});

router.post('/login', function(req, res, next) {
  var user = req.body;
  user.password = md5(user.password);
  Model('User').findOne(user,function(err,user){
    if(err){
      return res.json({code:0,msg:"登陆失败"});
    }
    if(user){
      req.session.user = user;
      return res.json({code:1,user:user});
    }else{
      return res.json({code:0,msg:"登陆失败"});
    }
  });
});

router.post('/logout', function(req, res, next) {
  req.session.user = null;
  return res.json({code:1,msg:"退出成功"});
});

router.post('/validate',function(req,res){
  var user = req.session.user;
  if(user){
    res.json({code:1,user:user});
  }else{
    res.json({code:0,user:{}});
  }
});
module.exports = router;
