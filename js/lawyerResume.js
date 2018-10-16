$(function(){
    $(".btn_edit_basic").click(function(){
        $(".basic:eq(0)").css("display","block");
        $(".basic:eq(1)").css("display","none");  
    })
    $(".xq_btn_edit").click(function(){
        $(".xq_inner:eq(0)").css("display","block");
        $(".xq_inner:eq(1)").css("display","none");  
    })


    //点击取消按钮
    $("#cancel").click(function(){
        cancel(); 
    });

    function cancel(){
        $(".basic:eq(1)").css("display","block");
        $(".basic:eq(0)").css("display","none");  
        $(".xq_inner:eq(1)").css("display","block");
        $(".xq_inner:eq(0)").css("display","none"); 
    };

    //单选样式覆盖
   
  
    $('#sex label').click(function(){
        var radioId = $(this).attr('name');
        $('#sex label').removeAttr('class') && $(this).attr('class', 'checked');
        $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });


    //弹窗
    //打开弹窗
    //alert_text("提交成功");
     
})

   