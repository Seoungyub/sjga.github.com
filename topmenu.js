var hovercheck1 = false;
var hovercheck2 = true;

$("#menu header nav #m ul li a").mouseenter(function(){
    // 로그인부분 먼저 창없엠 
    $("#menu header #icon_detail_wrap").removeClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").removeClass("show4")
    // 그리고 실행
    $("#detail_wrap").addClass("show1")
    $("#detail_wrap .dropdown").addClass("show2")
})

    $("#detail_wrap").mouseleave(function(){
           finalCheck();   
})

function finalCheck(){
    $("#detail_wrap").removeClass("show1")
    $("#detail_wrap .dropdown").removeClass("show2")
}

$("#menu header nav .icon ul li a").mouseenter(function(){
    // 메뉴먼저 창없엠 
    $("#detail_wrap").removeClass("show1")
    $("#detail_wrap .dropdown").removeClass("show2")
    // 그리고 실행
    $("#menu header #icon_detail_wrap").addClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").addClass("show4")
})

$("#icon_detail_wrap").mouseleave(function(){
    $("#menu header #icon_detail_wrap").removeClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").removeClass("show4")
})


$(document).ready(function(){
  
})