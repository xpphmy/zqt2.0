//弹窗事件
function av_action(){
	fn_clean();
	$('#HBox0').css("display","block");
}
//邮寄，确定
function fv_mail_determine(){
	registered();
}
//邮寄，选项否
function fv_mail_no(){
	registered();
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
$('.submitBtn').click(function(){
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

//调用二维码
function registered(){
	fn_clean();
	$('#HBox2').css("display","block");
}
//registered();

//关闭二维码弹窗
function close(){
	$('#HOverlay').remove();
	$('#HBox').css("display","none");  
};



//显示、隐藏网点
$("#toggle").click(function(){
	$(".doc_right ul").fadeToggle();
	$("#pagination").fadeToggle();
})

//隐藏网点
function fadeOut(){
	$(".doc_right ul").fadeOut();
	$("#pagination").fadeOut();
}
//显示网点
function fadeIn(){
	$(".doc_right ul").fadeIn();
	$("#pagination").fadeIn();
}




// 网点详情返回
$(".xq_ret").click(function(){
	$(".xq_right").fadeOut();
	$(".doc_right").fadeIn();
});
// 网点详情显示
function xq_fadeIn(){
	$(".xq_right").fadeIn();
	$(".doc_right").fadeOut();
}

$("#prev").click(function(){
	window.location.href="../html/BankAccount.html";
})