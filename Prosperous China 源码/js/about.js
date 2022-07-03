$(function(){
    //处理当前页面地址
    var href=self.location.href;
    var adress=href.lastIndexOf("lastWebsite");
    var oldWeb=href.slice(adress+12)
    // console.log(oldWeb)
    //设置字体变色
    $("#leftCaption").hover(function(){
        if($(this).css("color")=="rgb(0, 0, 0)")
            $(this).addClass("blackChangeColorWords");
        else
            $(this).addClass("whiteChangeColorWords");
    },function(){
            $(this).removeClass("blackChangeColorWords");
            $(this).removeClass("whiteChangeColorWords");
    })
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
    var winWith=$(window).width()/2,pathMargin=500,space=250
    var svgX=new Array(winWith,winWith-space,winWith+space,winWith-space,winWith+space,winWith)
    var svgY=new Array(pathMargin+0,pathMargin+200,pathMargin+550,pathMargin+900,pathMargin+1250,pathMargin+1750,)
    for(var i=0;i<=5;i++){
        var wordH=$("#word"+i).height()+10
        var wordW=$("#word"+i).width()+20.01
        if(i==5){
            $("#word"+i).css("top",svgY[i])
            $("#word"+i).css("left",svgX[i]-wordW/2)
        }
        else{
            $("#word"+i).css("top",svgY[i]-wordH)
            $("#word"+i).css("left",svgX[i]-wordW/2)
        }
        // console.log(svgY[i]-wordH,svgX[i]-wordW/2)
    }

    //滚动条事件，实现路线游走效果
    $(window).scroll(function () { 
        var posY=$("#pos").offset().top;
        // console.log(posY)
        for(var i=0;i<=4;i++){
            if(i==0){
                var min=svgY[i]-pathMargin,max=svgY[i]-pathMargin+2000
                if(min<=posY&&posY<=max){
                    $("#main").css("stroke-dashoffset",max-posY-60+"px")
                }
            }
            else{
                var min=svgY[i]-pathMargin,max=svgY[i]-pathMargin+800
                if(min<=posY&&posY<=max){
                    $("#branch"+i).css("stroke-dashoffset",max-posY+"px")
                }
            }
        }
    });

    //绑定跳转页面  
    $("#leftCaption").click(function(){
        if(oldWeb=="index.html")
            location.replace("../index.html")
        else{
            location.replace(oldWeb+"?lastWebsite=about.html")
        }
    })

})