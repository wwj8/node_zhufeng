/**
 * Created by Acer on 2015/7/25.
 */
angular.module('appModule').directive('ctrlEnterNewLine',function(){
    return function(scope,element,attrs){
        var ctrlDown = false;
        element.bind('keydown',function(event){
            if(event.which == 17){
                ctrlDown = true;
                setTimeout(function(){
                    ctrlDown = false;
                },1000);
            }else if(event.which == 13){
                if(ctrlDown){
                    element.val(element.val()+'\n');
                }else{
                    scope.$apply(function(){
                        scope.$eval(attrs.ctrlEnterNewLine);
                    })
                    event.preventDefault();
                }
            }


        });
    }
});