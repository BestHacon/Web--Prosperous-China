$(function(){
    loadJS()
    //似乎只能用JS原生方法载入JS文件
    function loadJS(){
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('id', 'backgroundJS');
        script.setAttribute('src', '../js/background.js');
        document.body.appendChild(script);
    }

    $("body").click(function(){
        var oldScrip=document.getElementById("backgroundJS");
        $("#c_n4").detach()
        document.body.removeChild(oldScrip);
        loadJS()
        // $("#c_n4").attr("strokeStyle","black")
    })


})