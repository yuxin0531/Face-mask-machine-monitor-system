/*
 * @Author: your name
 * @Date: 2020-05-09 16:36:53
 * @LastEditTime: 2020-05-09 16:55:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\numObj.js
 */
$(function () {
    $.ajax({
        url: "../json/data.json",
        type: "get",
        success: function (data) {
            // kn95口罩生产数量
            $('.kn-output-num').text(data.knOutputNum)
            // 平面口罩生产数量
            $('.output-num').text(data.OutputNum)
            // kn95人均产量
            $('.kn-num').text(data.knNum)
            // 平面口罩人均产量
            $('.pm-num').text(data.pmNum)
        }
    });

})