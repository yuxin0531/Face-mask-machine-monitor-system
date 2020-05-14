/*
 * @Author: your name
 * @Date: 2020-05-09 16:36:53
 * @LastEditTime: 2020-05-14 11:40:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\index\numObj.js
 */
$(function () {
    $.ajax({
        url: "../json/indexData.json",
        type: "get",
        // async: true,
        success: function (data) {
            if (data) {
                // kn95口罩生产数量
                $('.kn-output-num').text(data.ProdKN95)
                // 平面口罩生产数量
                $('.output-num').text(data.ProdpmKZ)
                // kn95人均产量
                $('.kn-num').text(data.UHHP.KN95)
                // 平面口罩人均产量
                $('.pm-num').text(data.UHHP.pmKZ)
                $('.none').remove()
            }
        }
    });

})