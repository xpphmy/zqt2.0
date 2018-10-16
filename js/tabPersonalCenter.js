var OrderShows=document.getElementsByClassName("MyOrderTop")[0].getElementsByTagName("span");
var MyOrderShows=document.getElementsByClassName("MyOrderShow");
for(var i=0;i<OrderShows.length;i++){
    OrderShows[i].onclick=function(){
        for(var j=0;j<OrderShows.length;j++){
            if(OrderShows[j]==this){
                OrderShows[j].className="MyOrderselect";
                MyOrderShows[j].id="Release0";
            }else{
                OrderShows[j].className="";
                MyOrderShows[j].id="";
            }
        }
    }
}


// 我的订单,资金,安全中心
$(".MyOrder figcaption").click(function(){
    addss();
    $(this).slideToggle();
    $(".show1").slideToggle();
});
$(".money figcaption").click(function(){
    addss();
    $(this).slideToggle();
    $(".show2").slideToggle();
});
$(".safe figcaption").click(function(){
    addss();
    $(this).slideToggle();
    $(".show3").slideToggle();
});
$(".authorize figcaption").click(function(){
    addss();
    $(this).slideToggle();
    $(".show4").slideToggle();
});
function addss(){
    $(".show1").slideUp();
    $(".show2").slideUp();
    $(".show3").slideUp();
    $(".show4").slideUp();
    $(".MyOrder figcaption").slideDown();
    $(".money figcaption").slideDown();
    $(".safe figcaption").slideDown();
    $(".authorize figcaption").slideDown();
}

  
//弹窗
//绑定
$(function(){
    var $el = $('.dialog');
    $el.hDialog(); //默认调用
    $('.btn').hDialog({
        effect: 'fadeOutUp',
        width: 480,
        height: 300
    });
    //绑定
	$('.safeBtn').click(function(){
		fn_clean();
		$('#HBox0').css("display","block");
    });
    //解绑
	$('.Unbundling').click(function(){
		fn_clean();
		$('#HBox01').css("display","block");
    });
    $('.confirm0').click(function(){
		fn_clean();
		$('#HBox5').css("display","block");
    });
})
// 绑定成功
$('.submitBtn0').click(function(){
	alert1();
});
$('.submitBtn01').click(function(){
	alert3();
});
// 绑定成功
function alert1(){
  fn_clean();
  $('#HBox1').css("display","block");
}
//绑定失败
function alert2(){
  	fn_clean();
    $('#HBox2').css("display","block");
}
// 解绑成功
function alert3(){
    fn_clean();
    $('#HBox3').css("display","block");
  }
  //解绑失败
  function alert4(){
        fn_clean();
      $('#HBox4').css("display","block");
  }

function fn_clean(){
    $('#HBox0').css("display","none");
    $('#HBox01').css("display","none");
    $('#HBox1').css("display","none");
    $('#HBox2').css("display","none");
    $('#HBox3').css("display","none");
    $('#HBox4').css("display","none");
    $('#HBox5').css("display","none");
}


//var val=document.getElementsByClassName("val")[0];
function clickButton(obj){
    var obj = $(obj);
    obj.attr("disabled","disabled");/*按钮倒计时*/
    var time = 30;
    var set=setInterval(function(){
    obj.val(--time+"(s)");
    }, 1000);/*等待时间*/
    setTimeout(function(){
    obj.attr("disabled",false).val("重新获取验证码");/*倒计时*/
    clearInterval(set);
    }, 30000);
}


//单选样式覆盖
$(function(){
    $('label').click(function(){
      var radioId = $(this).attr('name');
      $('label').removeAttr('class') && $(this).attr('class', 'checked');
      $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });
})



//我的授权
$(".authorizeTop span:eq(0)").click(function(){
    authorize_clean();
    $(this).css({
        "background":" #fff",
        "border-bottom":" 1px solid #fff"
    });
    $('.authorizeMe').css("display","block");
})
$(".authorizeTop span:eq(1)").click(function(){
    authorize_clean();
    $(this).css({
        "background":" #fff",
        "border-bottom":" 1px solid #fff"
    });
    $('.authorizeView').css("display","block");
})
function authorize_clean(){
    $(".authorizeTop span").css({
        "background":" #f1f1f1",
        "border-bottom":" 1px solid #ccc"
    });
    $('.authorizeMe').css("display","none");
    $('.authorizeView').css("display","none");
}

//删除
$(".authorizeView .delete").click(function(){
    $(this).parent().remove();
});
