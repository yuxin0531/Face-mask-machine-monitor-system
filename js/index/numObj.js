$(function () {
    $.ajax({
        url: "../json/data.json",
        type: "get",
        // async: true,
        success: function (data) {
           if(data){
           setTimeout(function(){
            $('.none').css("display","none")
           },2000)
            // kn95口罩生产数量
            $('.kn-output-num').text(data.knOutputNum)
            // 平面口罩生产数量
            $('.output-num').text(data.OutputNum)
            // kn95人均产量
            $('.kn-num').text(data.knNum)
            // 平面口罩人均产量
            $('.pm-num').text(data.pmNum)
           }
        }
    });

})