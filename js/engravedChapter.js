$(".doc_right li").click(function(){
	fv_move();
	$(this).addClass('select');
});
function fv_move(){
	$(".doc_right li").removeClass('select');
}

//刻章类型选择
//点击按钮克隆

$(function(){


	$(".inner_add:eq(0)").click(function(){
		var $text=$(this).parent();
		var nem=$(".list_type").length + 1;
		var radios="radio"+ nem;
		//增
		$text.find("input").attr("name","");
		$(".list_type").last().after($text.clone());
		$text.find("input").attr("name","radio1");
		$(".list_type").last().find("input").attr("name",radios);
		$(".list_type").last().find("img").attr("src","../img/t18.png");
		$(".list_type").last().find("img").parent().addClass("subtract");

		// 减
		$(".subtract").click(function(){
			$(this).parent().remove();
		});
	});
})


// 分页

$("#pagination").whjPaging({	
	css: 'css-1',
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
	window.location.href="../html/chapter.html";
})


// -------------------------下载上传-------------------------------

	//选择文件获取文件名称
    function getfilename(el){
        var _el = el.files;
        var _name = "";
        for(var i=0;i<_el.length;i++){
            if(i==_el.length-1){
                _name += _el[i].name
            }else{
                _name += _el[i].name+'、'
            }
            $('#upload').html(_name);
        }
    }
