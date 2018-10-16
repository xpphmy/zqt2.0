$(".top_right").animatext({
    speed: 150,
    effect: 'flipInX',
    infinite: true
});




$(".iphone").mouseover(function (){  
    $(".iphone").addClass("select_ip") ; 
}).mouseout(function (){  
    $(".iphone").removeClass("select_ip") ; 
});

$(".android").mouseover(function (){  
    $(".android").addClass("select_ad") ; 
}).mouseout(function (){  
    $(".android").removeClass("select_ad") ; 
}); 