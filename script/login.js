// 로그인 ID 기억하기 스크립트
var remeber_id = false;

$(".remember_id label").click(function(){
    console.log("이전:" + remeber_id)
    if (remeber_id == false){
        remeber_id = true;
    }else if(remeber_id == true){
        remeber_id = false;
    }
    console.log("이후:" + remeber_id)
})