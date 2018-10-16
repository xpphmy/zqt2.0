$(function(){
    var $el = $('.dialog');
    $el.hDialog(); //默认调用
    $('.btn').hDialog({
        effect: 'fadeOutUp',
        width: 400,
        height: 200
    });
})


text1("创建新元素");
function text1(a){
    var txt1=$("<p class='tc'></p>").text(a); //创建新元素
    $("#HBox5").append(txt1);
}
$(".tc").css({
    "text-align":"center"
})


//if订单状态完成，跳转签名页面
$(function(){
    var suc_btn=$("#suc_btn").html();
    if(suc_btn=="已完成"){
        $("#suc_btn").css({
            "backgroundColor":"#ef661b",
            "color":"#fff",
            "cursor":"pointer"
        })
        $("#suc_btn").click(function(){
            window.location.href="../html/autograph.html";
        })
    }
})
