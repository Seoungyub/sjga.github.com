//TopMenu Script

$("#menu header nav #m ul li a").mouseenter(function(){
    console.log("?")
    // 로그인부분 먼저 창없엠 
    $("#menu header #icon_detail_wrap").removeClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").removeClass("show4")
    // 그리고 실행
    $("#menu").addClass("show1")
    $("#detail_wrap").addClass("show1")
    $("#detail_wrap .dropdown").addClass("show2")
})
    $("#detail_wrap").mouseleave(function(){
           finalCheck();   
})

function finalCheck(){
    $("#menu").removeClass("show1")
    $("#detail_wrap").removeClass("show1")
    $("#detail_wrap .dropdown").removeClass("show2")
}

$("#menu header nav .icon ul li a").mouseenter(function(){
    // 메뉴먼저 창없엠 
    finalCheck();  
    // 그리고 실행
    $("#menu header #icon_detail_wrap").addClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").addClass("show4")
})

$("#icon_detail_wrap").mouseleave(function(){
    $("#menu header #icon_detail_wrap").removeClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").removeClass("show4")
})

//들어갈만한부분 다 넣어야함 게시판, 달력, 바로가기 등등
$(".main_img").mouseenter(function(){
    finalCheck();
    $("#menu header #icon_detail_wrap").removeClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").removeClass("show4")
})


//아이콘부분
$(".icon_search").click(function(){
    $("header").hide();
    $(".search_wrap").css("height","85px")
    // if($(window).width() >1900) { 
    //     $(".search_wrap").css("padding-bottom","15px")
    //  }
    $(".search_hidden").addClass("active")
    $(".close").addClass("active")
    $("#menu header #icon_detail_wrap").removeClass("show3")
    $("#menu header #icon_detail_wrap #icon_detail").removeClass("show4")
})

$(".close").click(function(){
    $("header").show();
    $(".search_hidden").removeClass("active")
    // $(".search_wrap").css("padding-bottom","0")
    $(".close").removeClass("active")
    $(".search_wrap").css("height","0px")
})

function enterkey() {
    if (window.event.keyCode == 13) {

         console.log("!")
    }
}




//머지
// var menu = [];
//     jQuery('.swiper-slide').each( function(index){
//         menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
//     });

//Content Mainimg Script
var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    
//IE호환성 및 반응형 제거
$(document).ready(function(){
    var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) 
|| (agent.indexOf("msie") != -1) ) {
$("#m ul li a span").removeClass("underline")
}

})
  
//달력 Script
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: 'AIzaSyAxMtO-GIbTB0h-Yf9ELnu82osQexH6OIY',
      

      dayMaxEventRows: true, // for all non-TimeGrid views
            views: {
            timeGrid: {
                        dayMaxEventRows: 6 // adjust to 6 only for timeGridWeek/timeGridDay
                      }
          },
      

      eventSources: [
      {
            googleCalendarId: '4d3hm7e7p6ddar5781g4ljefe0@group.calendar.google.com',
            className: 'SJGA',
            color: '#be5683', //rgb,#ffffff 등의 형식으로 할 수 있어요.
            //textColor: 'black' 
          },

      {
            googleCalendarId: 'ko.south_korea#holiday@group.v.calendar.google.com',
            className: 'ko.holliday',
            color: '#be5683', //rgb,#ffffff 등의 형식으로 할 수 있어요.
            //textColor: 'black' 
          },
      
      ]
    });
    calendar.render();
  });

  