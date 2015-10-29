var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var models = require('./models');
mongoose.connect('mongodb://123.57.143.189:27017/zhufengblog');
mongoose.model('User',new Schema(models.User));
mongoose.model('Ware',new Schema(models.Ware));
mongoose.model('Cart',new Schema(models.Cart));
global.Model = function(type){
    return mongoose.model(type);
}