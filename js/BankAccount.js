$(function(){
	$('#choice').click(function(){
        $('#choice').toggleClass('choiceImg');
    });

	$('#choice2').click(function(){
		$('#choice2').toggleClass('choiceImg2');
	});
	$(".doc_right li").click(function(){
		fv_move();
		$(this).addClass('select');
	});
	function fv_move(){
		$(".doc_right li").removeClass('select');
	}


	// 分页
	$("#pagination").whjPaging({
		css: 'css-1',
		// totalSize: 90,
		totalPage: 18,//总页数
		showPageNum: 3,//显示3页
		previousPage: '<',
		nextPage: '>',
		isShowFL: false,
		isShowPageSizeOpt: false,
		isShowSkip: false,
		isShowRefresh: false,
		isShowTotalSize: false,
		callBack: function (currPage, pageSize) {
			console.log('currPage:' + currPage + '     pageSize:' + pageSize);
		}
	});

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

	

	$("#next").click(function(){
		window.location.href="../html/bank.html";
	})


})

