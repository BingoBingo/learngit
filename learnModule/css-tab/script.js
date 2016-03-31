/**
 * Created by shaldon on 2016/2/2.
 */

function $(id){
    return typeof id==="string"?document.getElementById(id):id;
}

window.onload = function(){
    var index = 0;
    var timer = null;

    var lis = $("notice-tit").getElementsByTagName("li");
    var divs = $("notice-con").getElementsByTagName("div");

    if(lis.length != divs.length) return;

    for(var i=0;i<lis.length;i++){

        lis[i].id = i;
        lis[i].onmouseover = function(){
            //用that 引用划过的li
            var that = this;
            if(timer){
                clearTimeout(timer);
                timer =null;
            }
            timer = setTimeout(function(){
                for(var j=0;j<lis.length;j++){
                    lis[j].className ="";
                    divs[j].style.display = "none";
                }
                lis[that.id].className="select";
                divs[that.id].style.display = "block";
            },500);
        }
    }

    //timer = setInterval(function(){
    //    index++;
    //    if(index >=lis.length){
    //        index = 0;
    //    }
    //    console.log(index);
    //    for(var k=0;k<lis.length;k++){
    //        lis[k].className ="";
    //        divs[k].style.display="none";
    //    }
    //
    //    lis[index].className="select";
    //    divs[index].style.display="block";
    //
    //},2000)
}