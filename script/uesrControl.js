// $("#btn_controlActiver").click(function(){
//     $(".btn_control").css("right","320px")
//     $(".userControl").addClass("userControlActive")
// })

// $('html').click(function(e) { 
//     if($(".userControl").hasClass("userControlActive")){
//         if(!$(e.target).hasClass("userControl")){ 
//             console.log("!!!") 
//         } 
//     }
// });
$("#btn_controlActiver").click(function(){
    if($(".userControl").hasClass("userControlActive")){
            $(".userControl").removeClass("userControlActive") 
            $(".btn_control").removeClass("btn_controlActive")
    }else{
        $(".userControl").addClass("userControlActive")
        $(".btn_control").addClass("btn_controlActive").on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
        });
    }
})

$("html").click(function(e) {
    if(!$(e.target).is(".userControl, #btn_controlActiver")){ 
        $(".userControl").removeClass("userControlActive")
        $(".btn_control").removeClass("btn_controlActive")
    }
 })

