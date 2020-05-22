/*
 * @Author: your name
 * @Date: 2020-05-20 16:03:46
 * @LastEditTime: 2020-05-22 09:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\productionLine\aaa.js
 */
function downLaydateConfig(){
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
                    .length)));
            }
        }
        return fmt;
    }
    var timeNow = new Date().format("yyyy-MM-dd");

    //var STATS_START_TIME = '1329148800';
    var dateRange1 = new pickerDateRange('date1', {
        isTodayValid: true,
        startDate: timeNow,
        endDate: timeNow,
        needCompare: false,
        defaultText: ' - ',
        autoSubmit: true,
        inputTrigger: 'input_trigger1',
        theme: 'ta',
        success: function (obj) {
            $("#dCon2").html('开始时间 : ' + obj.startDate + '<br/>结束时间 : ' + obj.endDate);
        }
    });
}