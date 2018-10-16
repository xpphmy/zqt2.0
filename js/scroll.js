 $(function () {
            var $banner = $('#banner');
            var list = ['../img/index.png', '../img/index2.png'];   // 图库
            var zoom =1.2;                                               // 倍率
            var imageRatio = 1920/1080;                                 // 图片比例
            var step =5;                                              // 图片像素递增步数
            var num = 0;
            var timer = null;
            var currentWidth = $(window).width();
            var currentHeight = $(window).height();
            imageRatio = currentWidth / currentHeight;
            var width = currentWidth * zoom;

            init (num);
            //init 初始化
            function init(num) {
                $banner.css({
                    background: 'url("' + list[num] + '") no-repeat 0px 20px / cover'

                })
                 //$banner.fadeOut(1);
                //运动
                animate();
            }

            // 运动函数
            function animate(){
                timer = setInterval(function () {
                    currentWidth = currentWidth + step;
                    currentHeight = currentHeight + step/imageRatio;
                    $banner.css({
                        // backgroundSize: currentWidth + 'px ' + currentHeight + 'px'
                        background: 'url("' + list[num] + '") no-repeat 0px 20px / ' + currentWidth + 'px ' + currentHeight + 'px'
                    });
                    //$banner.fadeIn(1);
                    if (currentWidth > width){
                        clearInterval(timer);
                        timer = null;
                        num = (num + 1) % list.length;
                        currentWidth = $(window).width();
                        currentHeight = $(window).height();
                        init(num);
                    }
                }, 50);
            }
        })