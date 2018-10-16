//弹窗事件
function av_action(){
	fn_clean();
	$('#HBox0').css("display","block");
	
}
//邮寄，选项是
function fv_mail(){
	fn_clean();
	$('#HBox01').css("display","block");
}
function fn_clean(){
	$('#HBox0').css("display","none");
	$('#HBox1').css("display","none");
	$('#HBox2').css("display","none");
	$('#HBox01').css("display","none");
}

//弹窗

//提交
$('.btn').click(function(){
	av_action();
})
//是否邮寄
//邮寄_是
$('.submitBtn0').click(function(){
	fv_mail();
});
//邮寄_否
$('.submitBtn1').click(function(){
	registered()
});
//邮寄_是_确定
$('.submitBtn2').click(function(){
    registered();
});

//调用二维码
function registered(){
	fn_clean();
	$('#HBox2').css("display","block");
}
//关闭二维码弹窗
function close(){
	$('#HOverlay').remove();
	$('#HBox').css("display","none");  
};

