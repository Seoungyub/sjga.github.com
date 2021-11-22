//스크롤
$(window).scroll(function(){ 
    
    if($(window).scrollTop() >= $(document).height() - $(window).height()){ 
      
      if($(window).width() > 1600){
         $(".go_top").css({
             "bottom" : "220px"
         })
      }else {
        $(".go_top").css({
            "bottom" : "160px"
        })

      }

      $("body").on('mousewheel',function(e){
        
        //스크롤값 = e.originalEvent.wheelDelta
        if(e.originalEvent.wheelDelta>0){
            $(".go_top").css({
                "bottom" : "20px"
            })
        } 
        });
    }})

   $(".go_top").click(function(){
    $(".go_top").css({
        "bottom" : "20px"
    })
   })