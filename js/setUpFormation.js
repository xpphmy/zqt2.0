
//单选样式覆盖
$(function(){
    $('label').click(function(){
      var radioId = $(this).attr('name');
      $('label').removeAttr('class') && $(this).attr('class', 'checked');
      $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    });
  
  
  
  //
  //点击按钮克隆
    $(".inner_add:eq(0)").click(function(){
        var $text=$(this).parent();
        $(".add_reduce").last().after($text.clone());
        $(".add_reduce").last().find("img").attr("src","../img/t18.png");
        $(".add_reduce").last().find("img").parent().addClass("subtract");

        // 减
        $(".subtract").click(function(){
            $(this).parent().remove();
        });
    });
  
  
  
  
    //弹窗
    //打开弹窗
    $("#btn").click(function(){
        open();
    })
    function open(){
        $("#HBox").slideDown("slow");
        $("#HBox").after("<div id=col></div>");
        $("#col").click(function(){
            fv_close();
        })
    }

    // 关闭弹窗函数
    function fv_close(){
        $("#HBox").slideUp("slow");
        $("#col").remove();
    }  
})
  

//var aa=$(".checked").find("input").val();

