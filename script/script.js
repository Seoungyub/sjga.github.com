// =================================================================================================================================
//TopMenu Script

$("#menu header nav #m ul li a").mouseenter(function(){
    $("#menu").addClass("show1")
    $("#detail_wrap").addClass("show1")
    $("#detail_wrap .dropdown").addClass("show2")
    $("#menu").css("background-color","white","!important")
    $("#detail_wrap").css("background-color","white")
    $("#menu a").css("color","black")
    $("#menu").css("box-shadow","0 0 3px 0")
    $("#menu").css("height", "280px")
    document.getElementById("changeImg").src="img/logoBlack.png";

    // btn_control 검은색으로
    $("#btn_controlActiver").css("color", "black")
})

    $("#detail_wrap").mouseleave(function(){
    $("#menu").css("background-color","rgba(0, 0, 0, 0.0)","!important")
    $("#detail_wrap").css("background-color","white")
    $("#menu").css("background-color","white")
    $("#menu").css("box-shadow","0 0 0px 0")
        finalCheck();  
        if($(window).scrollTop() == 0){
            document.getElementById("changeImg").src="img/logoAllWhite.png";
            $("#menu a").css("color","white")
            $('#menu').css('background-color','rgba(0, 0, 0, 0.0)');

            // btn_control 흰색으로
            $("#btn_controlActiver").css("color", "white")
        }
    $("#menu").css("height", "85px")

   
})

function finalCheck(){
    $("#menu").removeClass("show1")
    $("#detail_wrap").removeClass("show1")
    $("#detail_wrap .dropdown").removeClass("show2")
}


// topmenu의 dropdown_underline을 클릭했을때 topmenu 바로 비활성화
$(".dropdown_underline").click(function(){
    $("#menu").removeClass("show1")
    $("#detail_wrap").removeClass("show1")
    $("#detail_wrap .dropdown").removeClass("show2")
    $("#menu").css("background-color","rgba(0, 0, 0, 0.0)","!important")
    $("#detail_wrap").css("background-color","white")
    $("#menu").css("background-color","white")
    $("#menu").css("box-shadow","0 0 0px 0")
        if($(window).scrollTop() == 0){
            document.getElementById("changeImg").src="img/logoAllWhite.png";
            $("#menu a").css("color","white")
            $('#menu').css('background-color','rgba(0, 0, 0, 0.0)');

            // btn_control 흰색으로
            $("#btn_controlActiver").css("color", "white")
        }
    $("#menu").css("height", "85px")
})

//들어갈만한부분 다 넣어야함 게시판, 달력, 바로가기 등등 특정상황에서 topmenu에 빠져나왔는데도 안꺼지는걸 해결
$(".main_img").mouseenter(function(){
    finalCheck();
    $("#menu").css("background-color","rgba(0, 0, 0, 0.0)","!important")
    $("#detail_wrap").css("background-color","white")
    $("#menu").css("background-color","white")
    $("#menu").css("box-shadow","0 0 0px 0")
        if($(window).scrollTop() == 0){
            document.getElementById("changeImg").src="img/logoAllWhite.png";
            $("#menu a").css("color","white")
            $('#menu').css('background-color','rgba(0, 0, 0, 0.0)');

            // btn_control 흰색으로
            $("#btn_controlActiver").css("color", "white")
        }
    $("#menu").css("height", "85px")
})

//너도 위에랑 같아
$(".content").mouseenter(function(){
    finalCheck();
    $("#menu").css("background-color","rgba(0, 0, 0, 0.0)","!important")
    $("#detail_wrap").css("background-color","white")
    $("#menu").css("background-color","white")
    $("#menu").css("box-shadow","0 0 0px 0")
        if($(window).scrollTop() == 0){
            document.getElementById("changeImg").src="img/logoAllWhite.png";
            $("#menu a").css("color","white")
            $('#menu').css('background-color','rgba(0, 0, 0, 0.0)');

            // btn_control 흰색으로
            $("#btn_controlActiver").css("color", "white")
        }
    $("#menu").css("height", "85px")
})



// function enterkey() {
//     if (window.event.keyCode == 13) {

//          console.log("!")
//     }
// }



// =================================================================================================================================
//index.html 메인사진 슬라이드

//머지
// var menu = [];
//     jQuery('.swiper-slide').each( function(index){
//         menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
//     });

//Content Mainimg Script
var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 3000,
        parallax: true,
        autoplay: {
            delay: 20000,
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
    // 슬라이드 이미지의 css를 조정
    // 이미지를 변경하는건 index.php에서 직접 
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            // $(this).css("background-image", "url(" + $(this).data("background") + ")");
            $(this).css("background-image", "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(" + $(this).data("background") + ")");
            // $(this).css("background-image","linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))");
        }
    });






    


        



    

    //hasClass()는 여러개 나열이 안됨
    //그래서 is쓸거임
    // $('html').click(function(e) { 

    //     if(!$(e.target).is(".tou2")){ 
    //         console.log("1")
    //         if($(".tou1").hasClass("showOptions_tou1")){
    //             console.log("2")
    //             $(".tou1").removeClass("showOptions_tou1")
    //             $(".tou2").removeClass("showOptions_tou2")
    //         }

    //     } 

        
    //     if($(".tou1").hasClass("showOptions_tou1")){}
    //     if(!$(e.target).is(".tou2, .tou1 p, #footmenuClickCheckId1")){ 
    //     $(".tou1").removeClass("showOptions_tou1")
    //     $(".tou2").removeClass("showOptions_tou2")
    // } 
    // });





  
//달력 Script 비활성화
/*
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
*/