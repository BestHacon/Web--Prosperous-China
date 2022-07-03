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
    var essayTittle=new Array("满满科技范儿！“科技冬奥”精彩纷呈")
    var essayPara=new Array(
        "北京冬奥会不仅是举世瞩目的一场体育盛会，也是观察中国科技创新的一扇窗口。无论是场馆设施、观众观赛，还是防疫手段、智能餐饮，众多新科技在北京冬奥会上惊艳亮相，科技冬奥彰显出“中国智慧”与“中国力量”，让我们一起感受科技赋能冬奥的魅力吧！",
        "<p>>>造“最快的冰”，碳排放量接近于零</p>",
        "<img src='../images/olympic/Olympic1.jpg'>",
        "从北京冬奥会速度滑冰项目开赛至13日，“冰丝带”共举行了8项赛事，除了速度滑冰女子500米项目未有创造新的纪录，其他每项赛事的夺冠成绩均打破奥运会纪录。冰丝带里连破奥运纪录，“最快的冰”藏着什么秘密？",
        "“冰丝带”的建设者创新性地采用了二氧化碳跨临界直冷制冰系统，使“冰丝带”成为奥运历史上首个使用该项技术的速滑馆。二氧化碳跨临界直冷制冰技术是当前冬季运动场馆最先进、最环保、最高效的制冰技术之一。它的应用，不仅能够为冬奥会比赛提供温度高度均衡的冰面，同时还可以使国家速滑馆碳排放量接近于零。冰丝带”整体冰面的温差不超过0.5摄氏度，这意味着整个冰面赛道硬度一致，非常有利于运动员滑出好成绩。",
        "“冰丝带”满满的创新科技元素，为冬奥会带来新的惊喜。点赞！",
        "<p>>>“水立方”魔幻般地化身“冰立方”</p>",
        "<img src='../images/olympic/Olympic2.jpg'>",
        "随着赛事推进，冬奥场馆也迎来“高光时刻”。冰壶赛场激战正酣，在奥运健儿脚下，另一项奇迹悄然诞生——国家游泳中心“水立方”魔幻般地化身“冰立方”，其中的水冰转换技术应用堪称神奇。",
        "应用装配式快速拆装和调平动态监测技术，20天内即完成“由水到冰”的场地转换，实现冰面毫米级高精度测量。这是世界首个可快速拆装的水冰转换场地和智能化奥运场馆。",
        "<p>>>防风网“网”罗科技元素</p>",
        "<img src='../images/olympic/Olympic3.jpg'>",
        "2月6日，参加北京冬奥会单板滑雪u型场地技巧比赛的运动员们在云顶滑雪公园全力备战。 场地内的防风墙可以有效地降低大风对运动员的干扰，保证赛事的正常运行。",
        "在张家口云顶滑雪公园则安装有一套防风系统，让运动员比赛时尽量少受风力的干扰。这套防风装置具有很好的透光性能，也有很强的抗拉性能，1米宽度的防风布可以承受1.2吨的压力，这让它的降风速性能特别好，每秒10米的大风，经过它的阻拦后，风速就降到每秒3.5米。",
        "<p>>>火炬背后的高科技</p>",
        "<img src='../images/olympic/Olympic4.jpg'>",
        "2月4日，一场令世界惊艳的开幕式点燃了人们的激情和梦想。当两名火炬手擎着火炬跑向“鸟巢”中央，全场寂静。火炬被轻轻插入基座，以“意想不到”的方式呈现于世人面前。“雪花”托举着盛开的火焰升空飘舞，开幕式气氛瞬间达到高潮。",
        "这是奥运史上首次以低碳绿色环保为核心原则设计的微火火炬。主火炬最大的创新之处是微火设计、视频显示以及由复杂的姿态控制系统构成鸟巢上空的完整结构，这在奥运史上是独一无二的。",
        "以绿色能源氢气作为燃料的微火设计，能实现氢气消耗量每小时小于2立方米。",
        "<p>>>“智能防疫员”上岗 1秒完成8个查验环节</p>",
        "<img src='../images/olympic/Olympic5.jpg'>",
        "在新冠疫情的大环境下，防疫可以说是最重要的一环。此次冬奥会我国采取了大量的“黑科技”防疫设备。",
        "“智能防疫员”一秒内可完成身份识别、智能测温等8个查验环节，快速判断相关人员的健康状态，最大程度提高信息核验效率，实现安全、便捷、快速通行。机器人自带感知设备，可迅速识别人员身份，快速判断其健康状态，显示屏上会呈现证件照片、核酸检测、接种疫苗等信息，并给出“未见异常”等状态提示。这一系列动作只需一秒便可完成，也可保证人体温度检测精准度在0.2℃以内。",
        "其次，被应用于冬奥会场馆消杀工作的布科思雾化消毒机器人，采用化学消毒的方式，一次能装16升消毒水，通过头顶上的四向喷头将液化出来的气雾喷洒至空气中，一分钟消毒面积可达36平方米。单台机器人消毒面积最多可覆盖1000平方米以上，续航时间4-5小时。据悉，该消毒机器人每天只需提前加好消毒液，到设定时间自己就可以启动执行消杀任务。",
        ">>智慧餐厅，美食“从天而降”",
        "<img src='../images/olympic/Olympic6.jpg'>",
        "当传统美食遇上高科技，会碰撞出怎样的火花？智能餐厅最大的特色就是既没有厨师炒菜，也没有服务员送餐，全程是自动化的烹饪和传送。食物在炒锅里翻炒，等上十几二十分钟，香喷喷的美味就出锅了。 菜和调料按比例自动分配好，依次倒进炒锅里，上下翻炒，炒好后，被装进餐盘。通过自动升降设备，餐盘被送到上方的云轨里，再由云轨系统的智能小车进行精准定位，餐盘就会“从天而降”，送到相应的桌台上。",
        "从冰雪场馆到运动装备，从交通出行到疫情防控，北京冬奥会融入了太多的高科技，为冬奥会的建设者们点赞！"
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
