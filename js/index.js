
    $(".top_right").animatext({
			speed: 150,
		    effect: 'flipInX',
		    infinite: true
        });


        
$(document).ready(function(){
  $("#qr_password").click(function(){
    $(".show1").toggle("slow");
    $(".show2").fadeToggle(1000);
  });
  $("#qr_code").click(function(){
     $(".show2").fadeToggle("slow");
     $(".show1").toggle(1000);
  });
});

// 办理动态，新闻消息,滚动效果
var demo=document.getElementById("demo"); 
var demo2=document.getElementById("demo2"); 
var demo1=document.getElementById("demo1"); 
//demo1的内部元素赋值给demo2也可以自己在写一遍
demo2.innerHTML=demo1.innerHTML;
//垂直滚动函数
function Marquee(){
    //如果demo2的距离demo的上边距减去demo的ScrollTop<=0，代表内部元素块全部移动到了demo的上边距之上
    if(demo2.offsetTop-demo.scrollTop<=0) 
        //重新设置scrollTop高度，可以设置为0或者自己调整
          demo.scrollTop-=demo1.offsetHeight;
    else{ 
        //代表内部元素块没有全部移动到demo上方，继续移动
        demo.scrollTop++;
    } 
}
setInterval(Marquee,200);



//办理动态
function news(){
    $("#news").css("display","block");
    $(".show1").css("display","none");
    $(".show2").css("display","none");
}

//news();


// -----------Ukey_sign_in--------------------//

//密码登录
$(".pass_sign").click(function(){
    pass_sign_in();
});
//Ukey登录
$(".ukey_sign").click(function(){
    ukey_sign_in();
});

//Ukey登录_调用绑定手机号
$(".ukey").click(function(){
    ukey();
});


//绑定手机号
$(".binding_num").click(function(){
    binding();
});
//binding();

//phone_num
//phone_num();


//密码登录
function pass_sign_in(){
    $(".right").css("display","none");
    $(".show1").fadeIn("slow");
    $(".sign_in span").css("border-bottom","1px solid #ccc"); 
    $(".pass_sign").css("border-bottom","2px solid #427fd1"); 
    $(".ukey_sign_in").css("display","none");
    $(".pass_sign_in").css("display","block");
}

//Ukey登录
function ukey_sign_in(){
    $(".right").css("display","none");
    $(".show1").fadeIn("slow");
    $(".sign_in span").css("border-bottom","1px solid #ccc"); 
    $(".ukey_sign").css("border-bottom","2px solid #427fd1"); 
    $(".pass_sign_in").css("display","none");
    $(".ukey_sign_in").css("display","block");
}

//Ukey登录_调用绑定手机号
function ukey(){
    $(".right").css("display","none");
    $(".show_ukey").fadeIn("slow");
    $(".sign_in span").css("border-bottom","1px solid #ccc"); 
    $(".ukey_sign").css("border-bottom","2px solid #427fd1"); 
}

//绑定手机号
function binding(){
    $(".right").css("display","none");
    $(".message").fadeIn("slow");
}

//phone_num
function phone_num(){
    $(".right").css("display","none");
    $(".phone").fadeIn("slow");
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