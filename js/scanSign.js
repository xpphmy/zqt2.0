//页面加载完成前执行
(function ($) {
	//在页面未加载完毕之前显示的loading Html自定义内容
	  var _LoadingHtml = '<div id="loadingDiv" style="width:400px;height:400px;margin:-200px 0 0 -200px;position:absolute;left:50%;top:50%;z-index:10000;"><img src="../img/loading.jpg" alt="页面加载中，请等待..."></div>';
	//呈现loading效果
	document.write(_LoadingHtml);
	//监听加载状态改变
	document.onreadystatechange = completeLoading;
	//加载状态为complete时移除loading效果
	function completeLoading(){
		if (document.readyState == "complete") {
		var loadingMask = document.getElementById('loadingDiv');
		loadingMask.parentNode.removeChild(loadingMask);
		}
	}
 })(jQuery);








$(function(){
	//打开弹窗
	$("#location").click(function(){
		open();
	})

	// 打开弹窗函数
	function open(){
		$("#HBox").slideDown("slow");
		$("#HBox").after("<div id=col></div>");
		$("#col").click(function(){
			close();
		})
	}

	// 关闭弹窗函数
		function close(){
			$("#HBox").slideUp("slow");
			$("#col").remove();
		}
});
