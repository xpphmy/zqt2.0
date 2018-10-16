
//弹窗事件
function av_action(){
	fn_clean();
	$('#HBox0').css("display","block");
}

//邮寄_是_确定
function fv_mail_determine(){
	fn_clean();
 	$('#HBox1').css("display","block");
}
//邮寄_否
function fv_mail_no(){
	fn_clean();
	$('#HBox1').css("display","block");
}
//邮寄_是
function fv_mail(){
	fn_clean();
	$('#HBox01').css("display","block");
}
//邮寄_提交
function fv_mail_submit(){
	window.location.href = "../html/payment.html";
}

function fn_clean(){
	$('#HBox0').css("display","none");
	$('#HBox1').css("display","none");
	$('#HBox01').css("display","none");
}


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
	fv_mail_no();
});
//邮寄_是_确定
$('.submitBtn2').click(function(){
	fv_mail_determine();
});
//邮寄_提交
$('.submitBtn3').click(function(){
	fv_mail_submit();
});