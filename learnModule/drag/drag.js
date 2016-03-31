/**
 * Created by shaldon on 2016/1/28.
 */
window.onload = drag;

function drag(){
    var login_logo_webqq = document.getElementById("login_logo_webqq");

    login_logo_webqq.onmousedown = fnDown;
}

function fnDown(event){

    event = event || window.event;
    var oPanel = document.getElementById("loginPanel");

    disX = event.clientX - oPanel.offsetLeft;
    disY = event.clientY - oPanel.offsetTop;


    //移动
    document.onmousemove = function(event){
        event = event || window.event;
        fnMove(event,disX,disY);
    }

    //释放鼠标
    document.onmouseup = function(event){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

function fnMove(event,posX,posY){
    var oPanel = document.getElementById("loginPanel");

    var l = event.clientX -posX;
    var t = event.clientY - posY;

    winW = document.documentElement.clientWidth || document.body.clientWidth;
    winH = document.documentElement.clientHeight || document.body.clientTop;

    maxW = winW - oPanel.offsetWidth;
    maxH = winH -oPanel.offsetHeight;

    if(l<0){
        l = 0;
    }else if(l > maxW){
        l = maxW;
    }

    if(t < 0){
        t = 0;
    }else if(t >maxH){
        t = maxH;
    }
    document.title = l ;

    oPanel.style.left = l + 'px';
    oPanel.style.top = t + 'px';
}