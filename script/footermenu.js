// =================================================================================================================================
    //footermenu 작동스크립트

    $(".tou1").click(function(){
        if($(".tou1").hasClass("showOptions1")){
                $(".tou1").removeClass("showOptions1")
                $(".tou2").removeClass("showOptions2")
        }else{
        $(".tou1").addClass("showOptions1")
        $(".tou2").addClass("showOptions2")
        }
    })

    $('html').click(function(e) {
        if(!$(e.target).is(".tou1, .tou2, .tou1 p, #footmenuClickCheckId1")){ 
            $(".tou1").removeClass("showOptions1")
            $(".tou2").removeClass("showOptions2")
        }
     })


     $(".pipp1").click(function(){
        if($(".pipp1").hasClass("showOptions11")){
                $(".pipp1").removeClass("showOptions11")
                $(".pipp2").removeClass("showOptions22")
        }else{
        $(".pipp1").addClass("showOptions11")
        $(".pipp2").addClass("showOptions22")
        }
    })

    $('html').click(function(e) {
        if(!$(e.target).is(".pipp1, .pipp2, .pipp1 p, #footmenuClickCheckId2")){ 
            $(".pipp1").removeClass("showOptions11")
            $(".pipp2").removeClass("showOptions22")
        }
     })