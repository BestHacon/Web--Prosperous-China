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
    var essayTittle=new Array("一场大考：碳达峰碳中和")
    var essayPara=new Array(
        "实现碳达峰、碳中和，是以习近平同志为核心的党中央经过深思熟虑作出的重大战略决策，事关中华民族永续发展和构建人类命运共同体。",
        "历史会镌刻下这一笔",
        "2020年9月22日，在第七十五届联合国大会一般性辩论上，国家主席习近平向全世界郑重宣布——中国“二氧化碳排放力争于2030年前达到峰值，努力争取2060年前实现碳中和”。",
        "郑重的承诺迅速传遍世界。海外舆论认为这是中国应对气候变化的重要一步，必将对全球气候治理产生变革性影响。",
        "<img src='../images/ecology/ecology1.jpg'>",
        "2020年9月22日，国家主席习近平在第七十五届联合国大会一般性辩论上发表重要讲话。",
        "作为世界上最大的发展中国家，中国将用30年左右时间完成全球最高碳排放强度降幅，用全球历史上最短的时间实现从碳达峰到碳中和，难度可想而知。",
        "“实现这个目标，中国需要付出极其艰巨的努力。”考量今日中国的世界角色，习近平主席坚定表示，“我们认为，只要是对全人类有益的事情，中国就应该义不容辞地做，并且做好。”",
        "<img src='../images/ecology/ecology2.jpg'>",
        "实现碳达峰、碳中和是一场硬仗，也是对我们党治国理政能力的一场大考。锚定目标，一步一个脚印往前走。这是中国共产党人的鲜明风格，也是中国留给世界的深刻印象。",
        "参加重要会议、主持中央政治局集体学习、实地考察能源企业、和代表委员共商国是……这两年，习近平总书记在不同场合频频谈及“双碳”工作的认识论和方法论，对这一关系中国长远发展的重大问题作出科学指引。",
        "2021年3月15日，中央财经委员会第九次会议上，总书记明确提出“要把碳达峰、碳中和纳入生态文明建设整体布局”，一句“拿出抓铁有痕的劲头”如期实现“双碳”目标，彰显了我国坚持绿色低碳发展的战略定力。",
        "2022年1月24日，中央政治局今年首次集体学习，再次聚焦“双碳”主题。会上，总书记明确表示：“减排不是减生产力，也不是不排放，而是要走生态优先、绿色低碳发展道路，在经济发展中促进绿色转型、在绿色转型中实现更大发展。”",
        "几天后，赴山西考察的习近平总书记走进了一家热电公司，这也是他四个月内第三次调研能源企业。总书记反复强调：“推进碳达峰碳中和，不是别人让我们做，而是我们自己必须要做，但这不是轻轻松松就能实现的，等不得，也急不得。”",
        "<img src='../images/ecology/ecology3.jpg'>",
        "“不能把手里吃饭的家伙先扔了，结果新的吃饭家伙还没拿到手，这不行。”2022年全国两会上，习近平总书记深入浅出地讲明绿色低碳发展要先立后破、循序渐进的道理，针对当前“双碳”工作中出现的一些误区敲响了警钟。",
        "<img src='../images/ecology/ecology4.png'>",
        "2021年5月18日，武夷山国家公园桐木村附近群山云雾缭绕。",
        "“森林是水库、钱库、粮库，现在应该再加上一个‘碳库’。”这十年，习近平总书记每年春天都会同首都各界一同植树。去年挥锹植树时，他谈到了其中要义：“增加森林面积、提高森林质量，提升生态系统碳汇增量，为实现我国碳达峰碳中和目标、维护全球生态安全作出更大贡献。”",
        "…………",
        "有担当，更有行动。",
        "“前人种树后人乘凉，我们每个人都是乘凉者，但更要做种树者。”总书记这席话，恰是“减碳”“低碳”走入日常生活的生动写照。",
        "2021年，《中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见》和《2030年前碳达峰行动方案》相继发布，我国碳达峰碳中和工作有了时间表、路线图和施工图。",
        "作为新兴的“车轮上的国家”，2021年中国新能源汽车产销量双双突破350万辆，同比均增长了1.6倍。",
        "如期顺利举办的北京冬奥会、冬残奥会精彩纷呈，让人赞不绝口。“水冰转换”、微光火炬、氢能大巴……绿色低碳成为一大亮点。",
        "义务植树、认建绿地、网络捐赠树苗、购买森林碳汇……人们以各种方式植绿护绿，积木成林、积林成森。",
        "<img src='../images/ecology/ecology5.png'>",
        "循序渐进、持续发力，在大有可为的年代，我们一定能够如期实现“双碳”目标，推动高质量发展迈上新台阶。"
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
        $('#rightBar').height($(document).height()); 
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
