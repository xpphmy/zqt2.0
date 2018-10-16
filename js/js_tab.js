var inputs=document.getElementsByClassName("inputs");
var textRed=document.getElementById("textRed");
$(".btn").click(function(){
    for(var i = 0; i < inputs.length; i++) {
        //alert( inputs.length);
        if(inputs[i].value==""){
            inputs[i].style.border="1px solid red";
        }else{  
            inputs[i].style.border="none";
        }
    }
})