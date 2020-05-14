// /*
//  * @Author: your name
//  * @Date: 2020-05-08 16:38:49
//  * @LastEditTime: 2020-05-14 09:44:51
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\index\getEchartData.js
//  */
$(function () {
    var maskQuantityChart = echarts.init(document.getElementsByClassName('stock-chart')[0]);
    var equipmentChart = echarts.init(document.getElementsByClassName('chartOne')[0]);
    var equipmentChartTwo = echarts.init(document.getElementsByClassName('chartTwo')[0]);
    var equipmentChartThree = echarts.init(document.getElementsByClassName('chartThree')[0]);
    var equipmentChartFour = echarts.init(document.getElementsByClassName('chartFour')[0]);
    var knoutputChart = echarts.init(document.getElementsByClassName('knoutput-chart')[0]);
    var pmoutputChart = echarts.init(document.getElementsByClassName('pmoutput-chart')[0]);
    var environmentChartOne = echarts.init(document.getElementsByClassName('environment-chart-one')[0]);
    var environmentChartTwo = echarts.init(document.getElementsByClassName('environment-chart-two')[0]);
    var environmentChartThree = echarts.init(document.getElementsByClassName('environment-chart-three')[0]);
    var perUnitOutputChartOne = echarts.init(document.getElementsByClassName('perUnitOutput-chart-one')[0]);
    var perUnitOutputChartTwo = echarts.init(document.getElementsByClassName('perUnitOutput-chart-two')[0]);
    const chartArr = [];
    $.ajax({
        url: "../json/indexData.json",
        type: "get",
        // async: true,
        success: function (data) {
            if (data) {

                $('.kn-output-num').text(data.ProdKN95)
                // 平面口罩生产数量
                $('.output-num').text(data.ProdpmKZ)
                // kn95人均产量
                $('.kn-num').text(data.UHHP.KN95)
                // 平面口罩人均产量
                $('.pm-num').text(data.UHHP.pmKZ)
                // 口罩入库数量
                chartArr[0] = maskOption;
                chartArr[0].series[0].data = data.StockQty.actual;
                chartArr[0].series[1].data = data.StockQty.target;
                maskQuantityChart.setOption(chartArr[0]);

                // 设备稼动率
                // kn95
                chartArr[1] = equipmentOption;
                chartArr[1].series[0].data[0].value = data.OEE[0].running;
                chartArr[1].series[0].data[1].value = data.OEE[0].down;
                equipmentChart.setOption(chartArr[1]);

                // 平面口罩
                chartArr[2] = equipmentOptionTwo;
                chartArr[2].series[0].data[0].value = data.OEE[1].running;
                chartArr[2].series[0].data[1].value = data.OEE[1].down;
                equipmentChartTwo.setOption(chartArr[2]);

                // 耳带机1
                chartArr[3] = equipmentOptionThree;
                chartArr[3].series[0].data[0].value = data.OEE[2].running;
                chartArr[3].series[0].data[1].value = data.OEE[2].down;
                equipmentChartThree.setOption(chartArr[3]);

                // 耳带机2
                chartArr[4] = equipmentOptionFour;
                chartArr[4].series[0].data[0].value = data.OEE[3].running;
                chartArr[4].series[0].data[1].value = data.OEE[3].down;
                equipmentChartFour.setOption(chartArr[4]);

                // kn95口罩产量
                chartArr[5] = knoutputOption
                chartArr[5].series[0].data = data.KN95
                chartArr[5].series[1].data = data.KN95
                knoutputChart.setOption(chartArr[5]);

                // 平面口罩产量
                chartArr[6] = pmoutputOption
                chartArr[6].series[0].data = [data.pmKZ[0]]
                chartArr[6].series[1].data = [data.pmKZ[1]]
                chartArr[6].series[2].data = [data.pmKZ[2]]
                pmoutputChart.setOption(chartArr[6]);

                // 车间环境
                // 温度
                chartArr[7] = environmentOptionOne;
                chartArr[7].series[0].data[0].value = data.ENV.environmentTemperature / 50 * 100;
                chartArr[7].series[0].data[0].label.normal.formatter = function (params) {
                    return "{a|" + params.value * (50 / 100) + "°}";
                };
                chartArr[7].series[0].data[1].value = 100 - data.ENV.environmentTemperature / 50 * 100,
                    environmentChartOne.setOption(chartArr[7]);

                // 湿度
                chartArr[8] = environmentOptionTwo;
                chartArr[8].series[0].data[0].value = data.ENV.environmentHumidity;
                chartArr[8].series[0].data[0].label.normal.formatter = function (params) {
                    return "{a|" + params.value + "%}";
                };
                chartArr[8].series[0].data[1].value = 100 - data.ENV.environmentHumidity,
                    environmentChartTwo.setOption(chartArr[8]);

                // 大气压
                chartArr[9] = environmentOptionThree;
                chartArr[9].series[0].data[0].value = data.ENV.environmentAirPressure / 120 * 100;
                chartArr[9].series[0].data[0].label.normal.formatter = function (params) {
                    return "{a|" + params.value * (120 / 100) + "Kpa}";
                };
                chartArr[9].series[0].data[1].value = 100 - data.ENV.environmentAirPressure / 120 * 100;
                environmentChartThree.setOption(chartArr[9]);

                // 单位产量
                // KN95
                chartArr[10] = perUnitOutputOptionOne;
                chartArr[10].series[1].data[0].value = data.unitQty.KN95
                chartArr[10].series[1].axisLine.lineStyle.color[0][0] = data.unitQty.KN95 / 150
                perUnitOutputChartOne.setOption(chartArr[10]);

                // 平面
                chartArr[11] = perUnitOutputOptionTwo;
                chartArr[11].series[1].data[0].value = data.unitQty.pmKZ
                chartArr[11].series[1].axisLine.lineStyle.color[0][0] = data.unitQty.pmKZ / 150
                perUnitOutputChartTwo.setOption(chartArr[11]);
                $('.none').remove()
            }

        }
    });
    // setEchartsData()
})