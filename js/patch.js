$(function(){
	function box_patch(){
		var box_patch="\
			<div id='box_patch'>\
				<div id='patch'>\
					<p class='close_patch'>X</p>\
					<p class='patch_title'>业务流程</p>\
					<ul>\
					<li class='patch_n n1'>提交开户信息</li>\
					<li class='patch_2n'>实时</li>\
					<li class='patch_n n2'>审核信息</li>\
					<li class='patch_2n'>2-3天</li>\
					<li class='patch_n n3'>审核通过</li>\
					<li class='patch_sn'>实时</li>\
					<li class='patch_n n6'>电子签章</li>\
					<li class='patch_2n'>1天</li>\
					<li class='patch_n n5'>柜台开户</li>\
					<li class='patch_2n'>2-3天</li>\
					<li class='patch_n n4'>完成</li>\
				</ul>\
			</div>\
		</div>"
		$("#box").after(box_patch);
		$("#box_patch").fadeIn();
		$(".close_patch").click(function(){
			//$("#box_patch").fadeToggle();
			$("#box_patch").remove();
			$("#box_patch").queue(function(){
				$(this).remove();
				$(this).dequeue();
			})
			// setTimeout(function(){
			// 	$("box_patch").remove();
			// },500);
		})
	}

	$(".patch").click(function(){
		box_patch();
	})	
})