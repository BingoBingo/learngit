/**
 * Created by shaldon on 2016/1/27.
 */
window.onload = function(){
    var go = document.getElementById('go'),
        box = document.getElementById('box');

    eventUtil.addHandler(box,'click',function(){
        alert("我是父盒子");
    });

    eventUtil.addHandler(go,'click',function(e){
        e = e || window.event;
        alert(eventUtil.getElement(e).nodeName)
        eventUtil.preventDefault(e);
        eventUtil.stopPropagation(e)
    })

}