var x = 20;
//alert(isNaN(x)); //判断其是不是数字
function scroll() {
   var title = document.title;
   var fristchar = title.charAt(0); //在从中取第一个字符；(charAt)
   var rightstr = title.substring(1, title.length); //结束位置必须是title.length;
   document.title = rightstr + fristchar;
}
setInterval("scroll()", 500); //每隔0.5秒就动一次;