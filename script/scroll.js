//js if문 and = && 
//js if문 or = ||
//스크롤에 따라 상단바의 변화

var last_scrollTop = 0;


$(window).scroll(function(){ 

    

    if($(window).scrollTop() >= 1 && $(window).scrollTop() <700){ 
        document.getElementById("changeImg").src="img/logoBlack.png";
        $('#menu').css('background-color','white');
        $("#menu a").css("color","black")
        $("#m").css("display","");

        // btn_control 검은색으로
        $("#btn_controlActiver").css("color", "black")
        $(".btn_directLogin").css("color", "black")
        $("#menu").each(function() {
            if ($(this).height() >= 260 ) {
              
            }else{
                $("#menu").css("height","85");
            }
          });

    }else if($(window).scrollTop() == 0){
        

        $("#menu").each(function() {
            if ($(this).height() <= 260 ) {
                document.getElementById("changeImg").src="img/logoAllWhite.png";
                $('#menu').css('background-color','rgba(0, 0, 0, 0.0)');
                $("#menu a").css("color","white")
                // $("#menu").removeClass("show1")
                // $("#detail_wrap").removeClass("show1")
                // $("#detail_wrap .dropdown").removeClass("show2")
                // $("#menu").css("height","85","!import");

                // btn_control 흰색으로
                $("#btn_controlActiver").css("color", "white")
                $(".btn_directLogin").css("color", "white")
            }
          });

        
        // $("#menu").removeClass("show1")
        // $("#detail_wrap").removeClass("show1")
        // $("#detail_wrap .dropdown").removeClass("show2")


    }else if($(window).scrollTop() >= 700){
        document.getElementById("changeImg").src="img/logoBlack.png";

        var tmp = $(this).scrollTop();

        $("#menu").each(function() {
            if ($(this).height() >= 260 ) {
          
            }else{
                if (tmp > last_scrollTop) {
                    $("#menu").css("height","0");
                    $("#m").css("display","none");
                    // $("#menu").removeClass("show1")
                    // $("#detail_wrap").removeClass("show1")
                    
                    // scroll down event
                } else {
                    $("#menu").css("height","85","!import");
                    $("#m").css("display","");
                    // $("#menu").addClass("show1")
                    // scroll up event
                    
                }
                last_scrollTop = tmp;
       
            }
          });

          
        
          

       
       
    }
})
