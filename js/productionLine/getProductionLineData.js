/*
 * @Author: your name
 * @Date: 2020-05-13 15:13:45
 * @LastEditTime: 2020-05-14 14:56:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\productionLine\getEchartData.js
 */
$(function(){
     // 设备稼动率图表
     var productionLineMaskQuantityChart = echarts.init(document.getElementsByClassName('productionLine-equipment-chart')[0]);
     // 单位产量图表
     var productionLineperUnitOutputChart = echarts.init(document.getElementsByClassName('productionLine-perUnitOutput-chart')[0]);
     // 每小时产量
     var productionLineOutPutChart = echarts.init(document.getElementsByClassName('productionLine-hourly-output')[0]);
     const productionLineChartArr = [];
    //  获取?后面的参数
     var url = location.search;
    //  切取为数组[?ch,0&type,0]
     var num = url.split('=');
    //  获取ch
     var ch = parseInt(num[1]);
    //  获取type
     var type =  num[2];
     
     
     $.ajax({
        url: "../json/productionLineData.json",
        type: "get",
        // async: true,
        success: function (data) {
            type == 0 ? $(".productionLine-name").text('KN95'):$(".productionLine-name").text('平面');
           if(data){

            // 设备稼动率
            productionLineChartArr[0] = productionLineMaskQuantityOption;
            productionLineChartArr[0].series[0].data[0].value = data.OEE[0];
            productionLineChartArr[0].series[0].data[1].value = data.OEE[1];
            productionLineMaskQuantityChart.setOption(productionLineChartArr[0]);

            // 单位产量
            productionLineChartArr[1] = productionLineperUnitOutputOption;
            productionLineChartArr[1].series[1].data[0].value = data.unitQty
            productionLineChartArr[1].series[1].axisLine.lineStyle.color[0][0]= data.unitQty/150
            productionLineperUnitOutputChart.setOption(productionLineChartArr[1]);

            // kn95口罩产量
            productionLineChartArr[2] = productionLineOutPutOption
            productionLineChartArr[2].series[0].data = data.hourQty
            productionLineChartArr[2].series[1].data = data.hourQty
            productionLineOutPutChart.setOption(productionLineChartArr[2]);
            $('.none').remove()
           }
        }
    });
})