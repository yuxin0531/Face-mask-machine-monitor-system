// /*
//  * @Author: your name
//  * @Date: 2020-05-08 16:38:49
//  * @LastEditTime: 2020-05-14 09:44:51
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\index\getEchartData.js
//  */

//赋值
function setElementValue(evt) {
	var data = evt.data;
	
	$('.kn-output-num').text(data.ProdKN95)
	// 平面口罩生产数量
	$('.output-num').text(data.ProdpmKZ)
	// kn95人均产量
	$('.kn-num').text(data.UHHP.KN95)
	// 平面口罩人均产量
	$('.pm-num').text(data.UHHP.pmKZ)
	// 点击展示大屏监控影像
	
	// 口罩入库数量
	chartArr[0].option = maskOption;
	
	chartArr[0].option.series[0].data = data.StockQty.actual;
	chartArr[0].option.series[1].data = data.StockQty.target;
	chartArr[0].setOption(chartArr[0].option);

	// 设备稼动率
	// kn95
	equipmentOption.series[0].data[0].value = data.OEE[0].running;
	equipmentOption.series[0].data[1].value = data.OEE[0].down;
	chartArr[1].setOption(equipmentOption);

	// 平面口罩
	equipmentOptionTwo.series[0].data[0].value = data.OEE[1].running;
	equipmentOptionTwo.series[0].data[1].value = data.OEE[1].down;
	chartArr[2].setOption(equipmentOptionTwo);

	// 耳带机1
	equipmentOptionThree.series[0].data[0].value = data.OEE[2].running;
	equipmentOptionThree.series[0].data[1].value = data.OEE[2].down;
	chartArr[3].setOption(equipmentOptionThree);

	// 耳带机2
	equipmentOptionFour.series[0].data[0].value = data.OEE[3].running;
	equipmentOptionFour.series[0].data[1].value = data.OEE[3].down;
	chartArr[4].setOption(equipmentOptionFour);

	// kn95口罩产量
	knoutputOption.series[0].data = data.KN95
	knoutputOption.series[1].data = data.KN95
	chartArr[5].setOption(knoutputOption);

	// 平面口罩产量
	pmoutputOption.series[0].data = [data.pmKZ[0]]
	pmoutputOption.series[1].data = [data.pmKZ[1]]
	pmoutputOption.series[2].data = [data.pmKZ[2]]
	chartArr[6].setOption(pmoutputOption);

	// 车间环境
	// 温度
	environmentOptionOne = environmentOptionOne;
	environmentOptionOne.series[0].data[0].value = data.ENV.environmentTemperature / 50 * 100;
	environmentOptionOne.series[0].data[0].label.normal.formatter = function (params) {
		return "{a|" + params.value * (50 / 100) + "°}";
	};
	environmentOptionOne.series[0].data[1].value = 100 - data.ENV.environmentTemperature / 50 * 100,
	chartArr[7].setOption(environmentOptionOne);

	// 湿度
	environmentOptionTwo.series[0].data[0].value = data.ENV.environmentHumidity;
	environmentOptionTwo.series[0].data[0].label.normal.formatter = function (params) {
		return "{a|" + params.value + "%}";
	};
	environmentOptionTwo.series[0].data[1].value = 100 - data.ENV.environmentHumidity,
	chartArr[8].setOption(environmentOptionTwo);

	// 大气压
	environmentOptionThree.series[0].data[0].value = data.ENV.environmentAirPressure / 120 * 100;
	environmentOptionThree.series[0].data[0].label.normal.formatter = function (params) {
		return "{a|" + Math.round(params.value * (120 / 100)) + "Kpa}";
	};
	environmentOptionThree.series[0].data[1].value = 100 - data.ENV.environmentAirPressure / 120 * 100;
	chartArr[9].setOption(environmentOptionThree);

	// 单位产量
	// KN95
	perUnitOutputOptionOne.series[1].data[0].value = data.unitQty.KN95
	perUnitOutputOptionOne.series[1].axisLine.lineStyle.color[0][0] = data.unitQty.KN95 / 150
	chartArr[10].setOption(perUnitOutputOptionOne);

	// 平面
	perUnitOutputOptionTwo.series[1].data[0].value = data.unitQty.pmKZ
	perUnitOutputOptionTwo.series[1].axisLine.lineStyle.color[0][0] = data.unitQty.pmKZ / 150
	chartArr[11].setOption(perUnitOutputOptionTwo);
}
// 预留函数
function initIndexData() {
	// todo
}