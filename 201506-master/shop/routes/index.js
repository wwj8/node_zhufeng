var express = require('express');
var router = express.Router();//生成一个路由的实例

router.get('/',function(req,res,next){
  res.sendFile(path.join(__dirname,'app','index.html'));
});


module.exports = router;
