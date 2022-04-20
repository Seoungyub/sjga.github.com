    //IE호환성 및 반응형 제거
$(document).ready(function(){
    var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) 
|| (agent.indexOf("msie") != -1) ) {
$("#m ul li a span").removeClass("underline")
}
})