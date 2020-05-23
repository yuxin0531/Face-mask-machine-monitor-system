/*
 * @Author: your name
 * @Date: 2020-05-13 15:13:45
 * @LastEditTime: 2020-05-23 08:44:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\productionLine\getEchartData.js
 */

function setProduvtionLineValue(evt){
    var data = evt.data;
    $('.totalQty').text(data.totalQty);
    //  // 设备稼动率图表
    //  var productionLineMaskQuantityChart = echarts.init(document.getElementsByClassName('productionLine-equipment-chart')[0]);
    //  // 单位产量图表
    //  var productionLineperUnitOutputChart = echarts.init(document.getElementsByClassName('productionLine-perUnitOutput-chart')[0]);
    //  // 每小时产量
    //  var productionLineOutPutChart = echarts.init(document.getElementsByClassName('productionLine-hourly-output')[0]);
        // 设备稼动率
        productionLineMaskQuantityOption.series[0].data[0].value = data.oee[0];
        productionLineMaskQuantityOption.series[0].data[1].value = data.oee[1];
        productionLineChartArr[0].setOption(productionLineMaskQuantityOption);

        // 单位产量
        productionLineperUnitOutputOption.series[1].data[0].value = data.unitQty;
        productionLineperUnitOutputOption.series[1].axisLine.lineStyle.color[0][0]= data.unitQty/150;
        productionLineChartArr[1].setOption(productionLineperUnitOutputOption);
        // productionLineChartArr[1] = productionLineperUnitOutputOption;
        // productionLineChartArr[1].series[1].data[0].value = data.unitQty
        // productionLineChartArr[1].series[1].axisLine.lineStyle.color[0][0]= data.unitQty/150
        // productionLineperUnitOutputChart.setOption(productionLineChartArr[1]);

        // kn95口罩产量
        productionLineOutPutOption.series[0].data = data.hourQty
        productionLineOutPutOption.series[1].data = data.hourQty
        productionLineChartArr[2].setOption(productionLineOutPutOption);
        // productionLineChartArr[2] = productionLineOutPutOption
        // productionLineChartArr[2].series[0].data = data.hourQty
        // productionLineChartArr[2].series[1].data = data.hourQty
        // productionLineOutPutChart.setOption(productionLineChartArr[2]);
        // $('.none').remove()
        // 数据全部加载移除loading
        if(!$.loaded) {
            $.loaded = true;
             // 删除loading
             $('.none').remove()
        };
       
    }
     
     
    //  $.ajax({
    //     url: "../json/productionLineData.json",
    //     type: "get",
    //     // async: true,
    //     success: function (data) {
    //         type == 0 ? $(".productionLine-name").text('KN95'):$(".productionLine-name").text('平面');
    //        if(data){

    //         // 设备稼动率
  
    //         productionLineMaskQuantityOption.series[0].data[0].value = data.OEE[0];
    //         productionLineMaskQuantityOption.series[0].data[1].value = data.OEE[1];
    //         productionLineChartArr[0].setOption(productionLineMaskQuantityOption);

    //         // 单位产量
    //         productionLineperUnitOutputOption.series[1].data[0].value = data.unitQty;
    //         productionLineperUnitOutputOption.series[1].axisLine.lineStyle.color[0][0]= data.unitQty/150;
    //         productionLineChartArr[1].setOption(productionLineperUnitOutputOption);
    //         // productionLineChartArr[1] = productionLineperUnitOutputOption;
    //         // productionLineChartArr[1].series[1].data[0].value = data.unitQty
    //         // productionLineChartArr[1].series[1].axisLine.lineStyle.color[0][0]= data.unitQty/150
    //         // productionLineperUnitOutputChart.setOption(productionLineChartArr[1]);

    //         // kn95口罩产量
    //         productionLineOutPutOption.series[0].data = data.hourQty
    //         productionLineOutPutOption.series[1].data = data.hourQty
    //         productionLineChartArr[1].setOption(productionLineOutPutOption);
    //         // productionLineChartArr[2] = productionLineOutPutOption
    //         // productionLineChartArr[2].series[0].data = data.hourQty
    //         // productionLineChartArr[2].series[1].data = data.hourQty
    //         // productionLineOutPutChart.setOption(productionLineChartArr[2]);
    //         $('.none').remove()
    //        }
    //     }
    // });
