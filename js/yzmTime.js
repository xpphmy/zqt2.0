var val=document.getElementsByClassName("val")[0];
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



//上传营业执照
var previewImg1 = document.getElementById("previewImg1");
var preview1= document.getElementById("preview1");
    //文件域选择文件时, 执行readFile函数
previewImg1.addEventListener('change',readFile1,false);
function readFile1(){ 
    var file = this.files[0]; 
    preview1.innerHTML=file.name;
}


//单选样式覆盖
$(function(){
    $('label').click(function(){
      var radioId = $(this).attr('name');
      $('label').removeAttr('class') && $(this).attr('class', 'checked');
      $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });
})  
  