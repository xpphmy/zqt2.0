  //弹窗
  $(function(){
    var $el = $('.dialog');
    $el.hDialog(); //默认调用
    $('.btn').hDialog({
        effect: 'fadeOutUp',
        width: 480,
        height: 300
  });
//确认信息_确认
	$('.btn').click(function(){
		fn_clean();
		$('#HBox0').css("display","block");
  });
}) 
// 提现成功
$('.submitBtn0').click(function(){
	alert0();
});
//确认信息_取消
$('.btn2').click(function(){
	window.location.href = "../html/putForward.html";
});
$('.btn1').click(function(){
	window.location.href = "../html/Recharge.html";
});

// 提现成功
function alert0(){
  fn_clean();
  $('#HBox01').css("display","block");
}
//提现失败
function alert1(){
  	fn_clean();
    $('#HBox1').css("display","block");
}

function fn_clean(){
	$('#HBox0').css("display","none");
  $('#HBox01').css("display","none");
  $('#HBox1').css("display","none");
}

//提现充值
$('.wxPay').click(function(){
  pay_clean();
  $('.wxPay').attr("id","selectPay");
});
$('.zfPay').click(function(){
  pay_clean();
  $('.zfPay').attr("id","selectPay");
});
$('.banks').click(function(){
  pay_clean();
  $('.banks').attr("id","selectPay");
  $('.banks').addClass("bankPay");
});

function pay_clean(){
	$('.wxPay').removeAttr("id");
  $('.zfPay').removeAttr("id");
  $('.banks').removeAttr("id");
  $('.banks').removeClass("bankPay");
}