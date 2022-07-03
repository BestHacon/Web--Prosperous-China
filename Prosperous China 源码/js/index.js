$(function () {
    var nowSel = 0, oldSel = 0;
    var bgColor = new Array("", "white", "rgb(25,106,195)", "rgb(252,249,222)", "rgb(238,70,83)", "rgb(154,208,239)")
    var tittleColor = new Array("", "rgb(202,45,42)", "rgb(219,203,180)", "rgb(96,159,160)", "rgb(255,245,15)", "rgb(62,162,13)")
    var sentencesColor = new Array("", "black", "white", "black", "white", "black")
    var tittle = new Array("", "北京2022年冬奥会", "抗击新冠肺炎疫情", "中华传统节日端午节", "百年党史百年初心", "碳达峰与碳中和")
    var sentences = new Array("", "北京冬奥会的筹办，为中国冰雪运动发展提供良好契机。科技创新，成为中国冰雪运动前进道路上的嘹亮号角。“冬奥科技”在媒体上成为“现象级”热潮，充分彰显了科技创新的魅力，点燃了全社会对科技和冰雪运动的关注。",
        "2020年初，面对突如其来的新冠肺炎疫情，中国人民风雨同舟、众志成城。长城内外、大江南北，全国人民心往一处想、劲往一处使，把个人冷暖、集体荣辱、国家安危融为一体。",
        "农历五月初五，俗称“端午节”是中国民间的传统节日。初五可以称为端五。从史籍上看，“端午”二字最早见于晋人周处《风土记》：“仲夏端午，烹鹜角黍”。端午节是我国汉族人民的传统节日。",
        "百年根基，来路迢迢;千秋伟业，征途漫漫。中国共产党百年来的光辉历程，是无数共产党人怀揣着坚定的初心和执着的信念，在探索和奋斗中创造出来的。前路漫漫，我们要坚持“以史为鉴”，从党史中汲取前进力量。",
        "2020年9月22日，在第七十五届联合国大会一般性辩论上，国家主席习近平向全世界郑重宣布——中国“二氧化碳排放力争于2030年前达到峰值，努力争取2060年前实现碳中和”。郑重的承诺迅速传遍世界。")
    
    
    //第一部分————加载页面
    //将图像移至页面上方
    var picNum = 5;   //图片数量
    var picHei = $("#pic1").height()
    var picTop = $("#pic1").offset().top
    var movEnd = ($(window).height() * 1.1 - picHei) / 2 - picTop;
    var movStart = -picTop - $("#move").height() - movEnd * 0.2;
    var space = movEnd - movStart;
    //设置幕布及进度条
    var interval = 15;
    var process = 0;
    //幕布大小，亦即汉字大小（px）
    var curtainHeight = 118;
    var tmp
    // $("#move").css("top",-$("#pic1").offset().top-movEnd*0.15+"px")
    $("#curtain").css("display", "block")
    $("#curtain").css("bottom", $(window).height() - $(".caption1").offset().top - $(".caption1").height());
    //递归调用实现速度变化效果
    recursion();
    function recursion() {
        setTimeout(() => {
            process += 0.4;
            $(".bar").height(process + "%")
            $("#curtain").height(curtainHeight * process / 100 + "px")
            $("#move").css("top", movStart + space * process / 100 + "px")
            if (process <= 100) {
                interval = 15 - 10 * Math.sin(Math.PI * process / 100);
                // console.log(interval);
                recursion();
            }
            else {
                partTwo();
            }
        }, interval);
    }
    //partTwo();


    //第二部分
    //picSpace为移动图像时的间距 
    function partTwo() {
        $(".pics").css("transform", "rotate(7deg) rotateX(12deg) rotateY(-40deg)")
        $("#secContainer").css("perspective", "1500px")
        $(".bar").animate({
            width: '200%'
        }, 600, function () {
            //重置页面，删除原先内容
            $("body").css("background-color", "white");
            setTimeout(function () {
                $("body").css("transition", "all 0.6s");
            }, 600)
            $("#firstToDel").remove();
            $("#firstToAppear").css("opacity", "1");
            $("#topLabel").css("opacity", "1");
            $("#newBar").css("width", "1.2%");
        })
        selectOneMove(0)
        //使用闭包将变量i的值保护起来
        for (var i = 1; i <= picNum; i++)
            (function (arg) {
                $("#pic" + arg).click(function () {
                    selectOneMove(arg)
                })
            })(i)
        //鼠标滚轮控制图片滚动 注意这里引入了jquery.mousewheel.js插件才能实现
        var stop = 0;
        $("#move").hover(function (e) {
            // over
            $("#move").on("mousewheel", function (e) {
                if (!stop) {
                    if (e.deltaY > 0) {
                        if (nowSel > 1) {
                            selectOneMove(nowSel - 1)
                        }
                    }
                    else {
                        if (e.deltaY < 0) {
                            if (nowSel < picNum) {
                                selectOneMove(nowSel + 1)
                            }
                        }
                    }
                    stop = 1;
                    setTimeout(() => {
                        stop = 0;
                    }, 550);
                }
            })
        }, function (e) {
            // out
            $("#move").off("mousewheel")
        }
        );
        $("#startBut").hover(function () {
            $("#arrow").css("transition", "all 0.3s");
            $("#arrow").css("margin-left", "5px");
            $("#newBar").css("transition", "all 0.3s");
            $("#newBar").css("width", "2%");
        }, function () {
            $("#arrow").css("margin-left", "0px");
            $("#arrow").css("transition", "all 0.6s");
            $("#newBar").css("width", "1.2%");
            $("#newBar").css("transition", "all 0.6s");
        }
        );
        //绑定跳转页面
        for (var i = 1; i <= picNum; i++) {
            (function (arg) {
                $("#pic" + arg).click(function () {
                    //console.log(arg,oldSel)
                    if (arg == oldSel) location.replace("html/pic" + arg + ".html")
                })
                $("#pic" + arg).hover(function () {
                    if (nowSel == arg) {
                        $("#newBar").css("transition", "all 0.3s");
                        $("#newBar").css("width", "2%");
                    }
                }, function () {
                    if (nowSel == arg) {
                        $("#newBar").css("width", "1.2%");
                        $("#newBar").css("transition", "all 0.6s");
                    }
                })
            })(i)
        }
        $("#more").click(function () {
            location.replace("html/pic" + nowSel + ".html")
        })
        $("#rightCaption").click(function () {
            $("#rightBar").css("animation",'endScene 0.8s ease 0s 1');
            
            setTimeout(function(){
                location.replace("html/about.html?lastWebsite=index.html")
            },600)
        })
        $("#leftCaption").click(function () {
            window.open("html/intro.html")
        })

        //设置右边的bar
        $('#rightBar').height($(document).height()); 
        $("#rightCaption").hover(function(){
            $("#rightBar").css("left","99%");
            $("#rightBar").css("width","1%");
        },function(){
            $("#rightBar").css("width","0%");
            $("#rightBar").css("left","100%");
        })

        //设置字体变色
        $("#rightCaption").hover(function(){
            if($(this).css("color")=="rgb(0, 0, 0)")
                $(this).addClass("blackChangeColorWords");
            else
                $(this).addClass("whiteChangeColorWords");
        },function(){
            if($(this).css("color"))
                $(this).removeClass("blackChangeColorWords");
                $(this).removeClass("whiteChangeColorWords");
        })
        $("#leftCaption").hover(function(){
            if($(this).css("color")=="rgb(0, 0, 0)")
                $(this).addClass("blackChangeColorWords");
            else
                $(this).addClass("whiteChangeColorWords");
        },function(){
            $(this).removeClass("blackChangeColorWords");
            $(this).removeClass("whiteChangeColorWords");
        })

        //浮动的幅度
        process = 0.4
        //浮动的速度
        interval = 10
        //临时控制变量
        tmp = 75
        reFloatUD()
    }
    
    //当选中第i幅图像,移动图像位置
    function selectOneMove(i) {
        if (!i) i = 1;
        else {
            //首次不需要执行的代码
            $("body").css("background-color", bgColor[i]);
        }
        //首次需要执行的代码
        oldSel = nowSel, nowSel = i; //储存当前的图片
        // if(oldSel&&nowSel){
        //     //console.log(parseInt(oldSel),parseInt(nowSel))
        //     if(parseInt(oldSel)-parseInt(nowSel)<0){
        //         var tmpArray=Array("#newTittle","#newShow","#startBut")
        //         for(var i;i<tmpArray.length;i++){
        //             (function(arg){                         
        //                 $(tmpArray[arg]).animate({
        //                     marginBottom:'+=20px',
        //                     opacity:'0'
        //                 },200,function(){
        //                     $(tmpArray[arg]).css("margin-bottom",parseFloat($(tmpArray[arg]).css("margin-bottom"))-20+"px")
        //                     $(tmpArray[arg]).css("opacity","1");
        //                 })
        //             })(i)
        //         }
        //     }
        // }
        var newTop = ($(window).height() * 1.4 - 1.6 * i * picHei) / 2 - picTop + 'px'
        $("#move").animate({
            top: newTop
        }, 600)
        i = parseInt(i)
        $("#pic" + (i)).css("width", "80%")
        $("#pic" + (i)).css("margin-left", "0%")
        $("#pic" + (i)).css("filter", "grayscale(0%)")
        if (i - 1 >= 1) {
            $("#pic" + (i - 1)).css("width", "60%")
            $("#pic" + (i - 1)).css("margin-left", "10%")
            $("#pic" + (i - 1)).css("filter", "grayscale(100%)")
        }
        if (i + 1 <= picNum) {
            $("#pic" + (i + 1)).css("width", "60%")
            $("#pic" + (i + 1)).css("margin-left", "10%")
            $("#pic" + (i + 1)).css("filter", "grayscale(100%)")
        }
        //添加文字
        $("#newTittle").html(tittle[i]);
        $("#newTittle").css("color", tittleColor[i]);
        $("#newShow").html(sentences[i]);
        $("#newShow").css("color", sentencesColor[i]);
        $("#more").css("color", sentencesColor[i]);
        $("#arrow").css("border-color", tittleColor[i]);
        $("#topLabel").css("color", sentencesColor[i]);
        $("#newBar").css("background-color", tittleColor[i])

    }
    //图像上下浮动，体现动感
    function reFloatUD() {
        setTimeout(() => {
            tmp += 0.4;
            var newTop = parseFloat($("#move").css("top")) + process * Math.sign(Math.sin(2 * Math.PI * tmp / 100))
            $("#move").css("top", newTop + "px")
            if (tmp > 100) tmp = 0.4;
            interval = 30 - 10 * Math.abs(Math.sin(2 * Math.PI * tmp / 100));
            //console.log(interval)
            reFloatUD();
        }, interval);
    }
})

//实现线程休眠,等到指定时间在重新唤起（ms）
function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}    