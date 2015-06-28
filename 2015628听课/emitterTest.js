/**
 * Created by Acer on 2015/6/28.
 */

var util=require('util');
var EventEmitter=require('events').EventEmitter;

function gou(){

}

util.inherits(gou,EventEmitter);
var bell=new gou();
bell.addListener('fight',function(){
   console.log('狗打猫');
});
bell.on('fight',function(){
    console.log('因为猫太坏');
});
bell.emit('fight');
