/*
 * @Author: your name
 * @Date: 2020-05-08 09:51:10
 * @LastEditTime: 2020-05-22 17:33:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\index\monitorList.js
 */ 
function getMonitorList(){
    // 摄像头列表
    $.ajax({
        url: "../json/cameraList.json",
        type: "get",
        success: function (data) {
            const cameraList = data.cameraList
            console.log(cameraList);
            for (i = 0; i < cameraList.length; i++) {
                $('.monitoring-main').append(`<ul class="monitoring-wrap"><li class="monitoring" data-camera=${cameraList[i].id}>
                <span class="serial">${cameraList[i].num}</span>
                <span class="name">${cameraList[i].name}</span>
                <span>${cameraList[i].position}</span></li>
            </ul>`)
                $(".monitoring-wrap").css({
                    "display": "flex",  
                    "align-items": "space-between"
                })
                // $("ul").css({"cursor":"pointer"})
                $('li').css({"margin-bottom":"8px","cursor":"pointer","width":"428px","white-space": "nowrap","text-overflow":"ellipsis","overflow": "hidden"})
                $('.serial').css("margin-right", "65px")
                $('.name').css("margin-right", "95px")
            
                // $('.monitoring-three').children('.serial').text(cameraList[i].id)
            }
            $('.monitoring').click(function(e){
                // if (e.target == this) {
                //    console.log(this);
                // }
                $(this).css('background-color','rgba(255,255,255,.2').parent().siblings().children().css('background-color','')
                console.log($(this).attr('data-camera'));
              })
        }
    });
        
}