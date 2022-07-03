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
    var essayTittle=new Array("史话丨端午节的由来")
    var essayPara=new Array(
        "端午节，为每年仲夏，农历五月初五。端午节与春节、清明节、中秋节并称为中国民间的四大传统节日。自2008年起，端午节被列为国家法定节假日。2006年5月，国务院将其列入首批国家级非物质文化遗产名录；2009年9月，联合国教科文组织正式审议并批准中国端午节列入世界非物质文化遗产，成为中国首个入选世界非遗的节日。",
        "据南朝梁人宗懔所撰《荆楚岁时记》记载，因仲夏登高，顺阳在上，五月是仲夏，它的第一个午日正是登高顺阳好天气之日，故五月初五亦称为“端阳节”。此外端午节还称“重五节、午日节、五月节、龙舟节、浴兰节、诗人节”等。",
        "<img src='../images/dragon/dragon1.jpg'>",
        "“端午”一词最早出现于西晋名臣周处的《风土记》，这本文献成了现代人们查考端午节等传统节日习俗的重要参考。端午节起源于何时——长期以来众说纷纭，说法不一，争论不休。",
        "——源于纪念屈原",
        "<img src='../images/dragon/dragon2.jpg'>",
        "这种说法在全国流传很广，老百姓也最为认可。",
        "史料记载，公元前278年农历五月初五，楚国大夫、爱国诗人屈原听到秦军攻破楚国都城的消息后，悲愤交加，心如刀割，虽有心报国，却无力回天，于是选择以死明志，毅然写下绝笔作《怀沙》，抱石投入汨罗江，以身殉国。",
        "史料记载，公元前278年农历五月初五，楚国大夫、爱国诗人屈原听到秦军攻破楚国都城的消息后，悲愤交加，心如刀割，虽有心报国，却无力回天，于是选择以死明志，毅然写下绝笔作《怀沙》，抱石投入汨罗江，以身殉国。",
        "以后，在每年的五月初五，就有了龙舟竞渡、吃粽子、喝雄黄酒的风俗，以此来纪念爱国诗人屈原。",
        "——源于纪念伍子胥",
        "<img src='../images/dragon/dragon3.jpg'>",
        "端午节的第二个传说，在江浙一带流传很广，是纪念春秋末期的伍子胥。",
        "伍子胥先祖伍举，以正直进谏楚庄王而得名声，因此其后代于楚国亦有名声。伍子胥家族因在楚国被迫害，投奔吴国。受吴王阖闾重用，大破楚国，北镇齐晋，南服越人，官拜相国公。",
        "吴王夫差继位后，伍子胥认为应一举消灭越国，但是夫差为伯嚭所谗，不听“联齐抗越”的主张，前484年便赠伍子胥剑，赐自尽。子胥愤恨自刎，留下遗言，要家人于他死后把他的眼睛挖出，挂在东城门上，亲眼看着越国军队灭掉吴国。",
        "吴王夫差极怒，把伍子胥的尸首用鸱夷革裹着抛弃于钱塘江中。后来吴国果然被越王勾践所灭，夫差羞于在阴间见到伍子胥，用白布蒙住双眼后才举剑自尽。",
        "由于伍子胥尸沉于钱塘江之事比屈原投江为早，有些文献则认为，中国端午节的习俗与伍子胥有关，而非屈原。",
        "——源于古越民族图腾祭",
        "<img src='../images/dragon/dragon6.jpg'>",
        "据现代学者考证，端午节的起源更为古老，本与纪念屈原、伍子胥等人无关。闻一多先生在《端午考》《端午的历史教育》等文章中指出，端午节吃粽子、赛龙舟等习俗都和古代百越民族的龙图腾崇拜有关。古代长江中下游的百越民族以龙为图腾，他们“断发文身”来模拟龙形，以避免伤害。《汉书》记载：“越人常在水中，故断其发、文其身，以象龙子，故不见伤害也。”他们将粽子投到江河中是为了祭祀龙神；而将舟船刻画成龙形在水面竞渡，也是对龙的图腾崇拜。后世关于屈原、伍子胥等人的传说都是逐渐融入到端午节的习俗中来的。",
        "在数千年的历史发展中，大部分百越人已经融合到汉族中去了，其余部分则演变为南方许多少数民族，因此，端午节成了全中华民族的节日。",
        "<img src='../images/dragon/dragon7.jpg'>",
        "值得一提的是，前几年网上一直流传着“韩国人抢先申遗中国端午节”这则谣言，一度激起中国许多网民义愤填膺。此事的真相是：韩国人申遗的是韩国江陵市的一个传统节日，叫“江陵端午祭”，这个小范围的节日与中国传统的端午节不能说没有关系，但是将两者划等号显然是以偏概全的说法。端午节起源于中国，为中国传承和弘扬，并将影响传播到世界各地，为各国所承认这是毋庸置疑的。",
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
