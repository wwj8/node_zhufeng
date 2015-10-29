var express = require('express');
var app =  express();
require('./utils');
require('./models/model');
var favicon = require('serve-favicon');//收藏夹图标
var logger = require('morgan');//写日志的
var cookieParser = require('cookie-parser');//cookie  req.cookies
var bodyParser = require('body-parser');//解析请求体 req.body
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var path = require('path');
app.use(express.static('app'));
app.use(favicon(path.join(__dirname,'app', 'public', 'favicon.ico')));
app.use(logger('dev'));//使用日志中间件，指定格式dev
app.use(bodyParser.json());//解析 json数据 content-type = /application/json
app.use(bodyParser.urlencoded({ extended: false }));//解析form /applicatoin-www-form-urlencoded
app.use(cookieParser());//解析cookie
//执行完此中间件之后，req.session
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfsecret',//密钥，用来防止session被篡改
    key:'zhufengkey',// cookie name 的名字
    cookie:{maxAge:1000*60*60},//设置过期时间
    store:new MongoStore({
        db:'zhufengblog',
        host:'123.57.143.189'
    })
}));
app.use(flash());
var settings = require('./settings');

var routes = require('./routes/index');//主页路由
var users = require('./routes/users');//用户路由
var wares = require('./routes/wares');
var carts = require('./routes/carts');
app.use('/', routes);
app.use('/users', users);
app.use('/wares', wares);
app.use('/carts', carts);
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);//如果next有参数值的话就会直接交由错误处理中间处理进行处理
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);//设置服务器端错误状态码
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(80);
