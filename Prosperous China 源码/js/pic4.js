$(function(){
    //获取当前的页面数
    var href=self.location.href;
    var adress=href.lastIndexOf("pic");
    var pageNum=href[adress+3];
    var tittleColor=new Array("","rgb(202,45,42)","rgb(219,203,180)","rgb(96,159,160)","rgb(255,245,15)","rgb(62,162,13)")
    for(var i=60;i<=90;i++){
        // console.log(i,i/(i+100))
    }
    //文章内容
    var essayTittle=new Array("学习百年党史，赓续百年荣光")
    var essayPara=new Array(
        "“欲知大道，必先为史。”中国共产党的历史，从一艘小小红船开始，经历百年风云激荡，历经百年拼搏奋斗，终成中国号巍巍巨轮行稳致远，赓续百年荣光。走得再远都不能忘记来时的路，站在“两个一百年”奋斗目标的历史交汇点上，深入学习党的光辉历史，是开启全面建设社会主义现代化国家新征程的应有之义。",
        "<img src='../images/history/history1.jpg'>",
        "学习百年党史，以满怀深情的目光回望历史，缅怀革命先烈的丰功伟绩，汲取前进力量。陈铁军和周文雍别样革命婚礼现场，他们呼唤，“头可断，肢可折，革命精神不可灭”；夏明翰慷慨赴死，他呐喊，“砍头不要紧，只要主义真”；江竹筠受尽严刑拷打，她坚信，“竹签子是竹子做的，共产党员的意志是钢铁！”无数革命先烈用鲜血书写党史，为我们竖起了一座座精神丰碑。面对死亡，他们无所畏惧，只因为心中有信仰。广大青年干部要在学习党史中，继承发扬革命先烈追求信仰的精神，补足精神之钙，铸就精神之魂。",
        "<img src='../images/history/history2.jpg'>",
        "学习百年党史，以充满敬意的目光回望历史，以史为镜，食笋去箨。新时代青年干部要深入了解党和国家事业的来龙去脉，了解党的光荣传统、宝贵经验和伟大成就，在深入学习和不断领悟中厘清历史脉络、认清历史真实、听清时代脉动。",
        "要坚定对社会主义和共产主义的信念，坚定“四个自信”，坚决做到“两个维护”。在峥嵘岁月的记忆里，传承“乌蒙磅礴走泥丸”的长征精神，传承“俯首甘为孺子牛”的为民信念，传承“天工人巧日争新”的开拓创新。",
        "<img src='../images/history/history3.jpg'>",
        "学习百年党史，以当代目光回望历史，站在新的历史方位梳理历史发展脉络，以发展的眼光续写故事，指引前进的道路，强化“重任在己身”的使命担当。百年变局加速演进，外部环境风高浪急，广大青年干部只有正确认识党和人民事业所处的历史方位和发展阶段，不断从党史中汲取攻坚克难智慧力量，以乘风破浪的姿态、中流击水的状态、风雨无阻的心态，顶着压力干、冒着风险担、开动脑筋想，才能赓续艰苦奋斗的优良作风，涵养担当作为的政治品格，才能为社会主义事业贡献智慧和力量。",
        "<img src='../images/history/history4.jpg'>",
        "百年传承，风华绝代。青年干部要在学习党史中坚定理想信念，践行初心使命，把中华民族伟大复兴事业不断向前推进，以优异成绩庆祝建党100周年。",
    )
    //开场效果
    $("#topLabel").css("transition","all 0s");
    $("#container").css("transition","all 0s");
    if(href.lastIndexOf("about.html")>=0){
        $("#bar").css("background-color","white");
        $("body").css("background-color","black")
        $("#bar").css("animation",'openScene2 0.8s ease 0s 1');
        setTimeout(function(){
            $("body").css("background-color","white")
        },600)
    }
    else{
        $("#bar").css("background-color",tittleColor[pageNum]);
        $("#bar").css("animation",'openScene 1.5s ease 0s 1');
    }
    $("#topLabel").css("opacity","0");
    $("#container").css("opacity","0");
    setTimeout(function(){
        $("#bar").css("display", "none");
        //提前做好善后工作，为退出动画做准备
        $("#bar").css("left","100%");
        $("#bar").css("width","0%");
        $("#bar").css("background-color","black");
    },1500)
    setTimeout(function(){
        $("#topLabel").css("transition","all 0.6s");
        $("#container").css("transition","all 0.6s");
        $("#topLabel").css("opacity","1");
        $("#container").css("opacity","1");
    },1000)
    //页面顶部标签
    $("#leftCaption").hover(function () {
    $("#arrow").css("transition", "all 0.3s");
    $("#arrow").css("margin-right", "5px");
        $("#arrow").css("margin-left", "0px");
    }, function () {
        $("#arrow").css("margin-right", "0px");
        $("#arrow").css("margin-left", "5px");
        $("#arrow").css("transition", "all 0.6s");
    });
    //绑定跳转页面  
    $("#leftCaption").click(function(){
        $("body").css("overflow","hidden");
        $("#bar").css("display", "block");
        $('#bar').height($(document).height()); 
        $("#bar").css("animation",'endScene 0.8s ease 0s 1');
        setTimeout(function(){
            location.replace("../index.html")
        },600)
    })  
    $("#rightCaption").click(function(){
        $("#rightBar").css("animation",'endScene 0.8s ease 0s 1');
        setTimeout(function(){
            location.replace("about.html?lastWebsite=pic"+pageNum+".html")
        },600)
    })
    //添加文章主体部分内容
    $("#essay").append($("<div id='tittle'>"+essayTittle[0]+"</div>"));
    for(var i=0;i<essayPara.length;i++){
        // console.log((essayPara[i].search("<p>")))
        if((essayPara[i].search("<img"))>=0){
            $("#essay").append($("<div class='imgDiv'>"+essayPara[i]+"</div>"));
        }
        else if((essayPara[i].search("<p>"))>=0){
            $("#essay").append($("<div class='pDiv'>"+essayPara[i]+"</div>"));
        }
        else
            $("#essay").append($("<div class='paraDiv'>"+essayPara[i]+"</div>"));
    }

    //或许是由于$()是在界面界面中的DOM结构完成时候执行,因此马上执行会出错
    setTimeout(function(){
        //设置右边的bar
        // var barH=$("#essay").css("height");
        $('#rightBar').height($(document).height()); 
        // console.log(barH)
        $("#rightCaption").hover(function(){
            $("#rightBar").css("left","99%");
            $("#rightBar").css("width","1%");
        },function(){
            $("#rightBar").css("width","0%");
            $("#rightBar").css("left","100%");
        })
        $("#leftCaption").hover(function(){
            $("#rightBar").css("left","99%");
            $("#rightBar").css("width","1%");
        },function(){
            $("#rightBar").css("width","0%");
            $("#rightBar").css("left","100%");
        })
    
    },100)

    //设置字体变色
    $("#rightCaption").hover(function(){
        // console.log($(this).css("color"))
        if($(this).css("color")=="rgb(0, 0, 0)")
            $(this).addClass("blackChangeColorWords");
        else
            $(this).addClass("whiteChangeColorWords");
    },function(){
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

    //实现线程休眠,等到指定时间在重新唤起（ms）
    function sleep(delay) {
        var start = (new Date()).getTime();
        while ((new Date()).getTime() - start < delay) {
          continue;
        }
    }    

})
