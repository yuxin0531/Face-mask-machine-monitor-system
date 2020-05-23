/*
 * @Author: your name
 * @Date: 2020-05-14 17:13:28
 * @LastEditTime: 2020-05-23 13:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\productionLine\click.js
 */
function productionLineClick() {
    // 点击home按钮
    $('.home-icon').click(function(){
        window.location = '../html/index.html'
    })
    // 点击历史按钮显示遮罩层
    $('.history-btn').click(function () {
        // 隐藏导出模态框
        $('.down-modal').hide()
        // 显示遮罩层
        $('.black-mask-wrap').show()
        // 显示历史模态框
        $('.history-modal').show()
        

        // $('.aui-calendar').css('display','block')
        // $('.aui-mask').css('display','block')
    })
    // 点击遮罩层隐藏遮罩层
    $('.black-mask').click(function (e) {
        // 当点击的是遮罩层时隐藏遮罩层并获取导出的时间段
        if (e.target == this) {
            $(".black-mask-wrap").hide();
        }
    })

    // 点击历史的确认按钮
    $('.history-confirm-btn').click(function () {
        // 隐藏遮罩层
        $(".black-mask-wrap").hide();
        // 获取时间数据
        console.log($('.room').val());
        // 格式化时间
        var day = $('.room').val().replace(/-/g,'')
        console.log(day);
        
    })
    // 点击历史取消按钮
    $('.history-cancel-btn').click(function () {
        // 隐藏遮罩层
        $(".black-mask-wrap").hide();
    })

    // 点击导出按钮
    $('.export-btn').click(function () {
        // 隐藏历史模态框
        $('.history-modal').hide()
        // 显示遮罩层
        $('.black-mask-wrap').show();
        // 显示导出模态框
        $('.down-modal').show()

    })
    // 点击导出的确定按钮
    $('.down-confirm-btn').click(function () {
        // 开始时间和结束时间的数组
        var getTime = $('#date1').text().split('-');
        // console.log(startTimeYear);
        // console.log(startTimeMonth);
        // console.log(startTimeDate);

        // var startTime = $('.start-down').val().split('-');
        // var startTimeYear = parseInt(getTime[0]);
        // var startTimeMonth = parseInt(getTime[1]);
        // 把开始时间和结束时间拆分为两个数组
        var startTimeArr = [];
        var endTimeArr = [];
        for (i = 0; i < getTime.length; i++) {
            if (i < 3) {
                startTimeArr[i] = getTime[i].trim();
            } else {
                endTimeArr.push(getTime[i].trim())
            }
        };
        // 分别拼接开始时间和结束时间
        var startTime = startTimeArr.join('-');
        var endTime = endTimeArr.join('-');
        var endTime = endTimeArr.join('-');
        // 分别转为时间戳
        var startTimestamp = new Date(startTime);
        var endTimeTimestamp = new Date(endTime);
        // 求出间隔天数
        var days = ((endTimeTimestamp - startTimestamp) / 86400000) + 1
        // 大于90天提醒重新选择
        if (days > 90) {
            alert('导出数据大于90天,请重新选择时间段');
            return
        } else {
            // 隐藏遮罩层发送请求
            $(".black-mask-wrap").hide();
          var dataStartTime = startTimeArr.join('')
          var dataEndTime  =  endTimeArr.join('')
          console.log(dataStartTime);
          console.log(dataEndTime);
          
        }

        // var endTimeYear = parseInt(getTime[3]);
        // var endTimeMonth = parseInt(getTime[4]);
        // console.log(endTimeDate);
        // console.log(startTimeDate);
        // console.log(endTimeDate > startTimeDate);

        // if (startTimeYear < endTimeYear) {
        //     $(".black-mask-wrap").hide();
        // } else if (startTimeYear === endTimeYear && startTimeMonth < endTimeMonth) {
        //     $(".black-mask-wrap").hide();
        // } else if (startTimeMonth === endTimeMonth && startTimeDate < endTimeDate || startTimeDate == endTimeDate) {
        //     $(".black-mask-wrap").hide();
        // } else {
        //     alert('开始时间必须早于结束时间')
        // }
        // if(startTimeYear===endTimeYear&&endTimeMonth-startTimeMonth>3||startTimeYear!==endTimeYear&&12-startTimeMonth+endTimeMonth>3){
        //     alert('导出数据大于3个月,请重新选择时间段');
        //     return
        // }else{
        //     $(".black-mask-wrap").hide();
        // }
    })
    $('.down-cancel-btn').click(function () {
        // 隐藏遮罩层
        $(".black-mask-wrap").hide()
    })
    // $('.down-confirm-btn').click(function(){
    //      var startTime =  $('.start-down').val().split('-');
    //      var startTimeYear = parseInt(startTime[0]);
    //      var startTimeMonth = parseInt(startTime[1]);
    //      var startTimeDate = parseInt(startTime[2]);

    //      var endTime =  $('.end-down').val().split('-');
    //      var endTimeYear = parseInt(endTime[0]);
    //      var endTimeMonth = parseInt(endTime[1]);
    //      var endTimeDate = parseInt(endTime[2]);

    //      console.log(endTimeDate);
    //      console.log(startTimeDate);
    //      console.log(endTimeDate>startTimeDate);

    //     if(startTimeYear<endTimeYear){
    //         $(".black-mask-wrap").hide();
    //     } else if(startTimeYear===endTimeYear&&startTimeMonth<endTimeMonth){
    //         $(".black-mask-wrap").hide();
    //     }  else if(startTimeMonth===endTimeMonth&&startTimeDate<endTimeDate||startTimeDate==endTimeDate){
    //         $(".black-mask-wrap").hide();
    //     } else {
    //         alert('开始时间必须早于结束时间')
    //     }

    // })
}