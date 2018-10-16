//打开弹窗
$(".btn").click(function(){
    open();
})


function open(){
    $("#HBox").slideDown("slow");
    $("#col").css("display","block");
    $("#HBox").after("<div id=col></div>");
    $("#col").click(function(){
        fv_close();
        $("#col").css("display","none");
    })
}


// 关闭弹窗函数
function fv_close(){
    $("#HBox").slideUp("slow");
    $("#col").remove();
}