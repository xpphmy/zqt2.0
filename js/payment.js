var tabImgs=document.getElementsByClassName("tabImg");
var cen_mains=document.getElementsByClassName("cen_main");
for(var i=0;i<tabImgs.length;i++){
    tabImgs[i].onclick=function(){
        for(var j=0;j<tabImgs.length;j++){
            if(tabImgs[j]==this){
                //tabImgs[j].className="TypeService";
                cen_mains[j].id="cen_main";
            }else{
                //tabImgs[j].className="";
                cen_mains[j].id="";
            }
        }
    }
}