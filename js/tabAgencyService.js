var spans=document.getElementsByClassName("topLiAdd")[0].getElementsByTagName("button");
var shows=document.getElementsByClassName("show");
for(var i=0;i<spans.length;i++){
    spans[i].onclick=function(){
        for(var j=0;j<spans.length;j++){
            if(spans[j]==this){
                spans[j].className="TypeService";
                shows[j].id="show";
            }else{
                spans[j].className="";
                shows[j].id="";
            }
        }
    }
}

$(".show span button").click(function(){
    $(this).parent().addClass('Type_of_Service');
    $(this).parent().find(".close").css('display','block');
})
$(".show .close").click(function(){
    $(this).parent().removeClass('Type_of_Service');
    $(this).css('display','none');
})

