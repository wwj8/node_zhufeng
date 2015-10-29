/**
 * Created by Acer on 2015/7/25.
 */
angular.module('appModule').directive('autoScroll',function(){
    return {
        link:function(scope,element,attrs){
            scope.$watch(function(){
                return element.children().length;
            },function(){
                element.animate({
                    scrollTop:element.prop('scrollHeight')
                },300);
            });
        }
    }
});