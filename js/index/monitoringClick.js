/*
 * @Author: your name
 * @Date: 2020-05-22 14:51:54
 * @LastEditTime: 2020-05-22 15:03:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\index\monitoringShow.js
 */ 
function monitoringShow(){
    // 点击小屏监控弹出大屏监控
    $('.monitoring-click').click(function(){
        $('.index-mask-wrap').css('display','block')
    });
     // 点击遮罩层隐藏遮罩层
     $('.index-mask').click(function (e) {
        // 当点击的是遮罩层时隐藏遮罩层并获取导出的时间段
        if (e.target == this) {
            $('.index-mask-wrap').hide();
        }
    });
     $('.index-mask').click(function (e) {
        // 当点击的是遮罩层时隐藏遮罩层并获取导出的时间段
        if (e.target == this) {
            $('.index-mask-wrap').hide();
        }
    });
    
}