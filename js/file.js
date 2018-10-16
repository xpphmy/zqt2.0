
    var previewImg1 = document.getElementById("previewImg1");
    var preview1= document.getElementById("preview1");
    //文件域选择文件时, 执行readFile函数
    previewImg1.addEventListener('change',readFile1,false);
    function readFile1(){ 
        var file = this.files[0]; 
        preview1.innerHTML=file.name;
    }
    
    var previewImg2 = document.getElementById("previewImg2");
    var preview2= document.getElementById("preview2");
    //文件域选择文件时, 执行readFile函数
    previewImg2.addEventListener('change',readFile2,false);
    function readFile2(){ 
        var file = this.files[0]; 
        preview2.innerHTML=file.name;
    }