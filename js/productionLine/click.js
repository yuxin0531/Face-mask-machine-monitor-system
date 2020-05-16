/*
 * @Author: your name
 * @Date: 2020-05-14 17:13:28
 * @LastEditTime: 2020-05-16 16:50:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\productionLine\click.js
 */
$(function(){
    $('.history-btn').click(function(){
        $('.down-modal').hide()
        $('.black-mask-wrap').show()
        $('.history-modal').show()
        
        
        // $('.aui-calendar').css('display','block')
        // $('.aui-mask').css('display','block')
    })
    $('.black-mask').click(function(e){
        if(e.target==this){
            $(".black-mask-wrap").hide();
        }   
    })
    $('.history-confirm-btn').click(function(){
        $(".black-mask-wrap").hide();
    })
    $('.export-btn').click(function(){
            
        $('.history-modal').hide()
        $('.black-mask-wrap').show();
        $('.down-modal').show()
        
    })
    $('.down-confirm-btn').click(function(){
        
         var startTime =  $('.start-down').val().split('-');
         var startTimeYear = parseInt(startTime[0]);
         var startTimeMonth = parseInt(startTime[1]);
         var startTimeDate = parseInt(startTime[2]);

         var endTime =  $('.end-down').val().split('-');
         var endTimeYear = parseInt(endTime[0]);
         var endTimeMonth = parseInt(endTime[1]);
         var endTimeDate = parseInt(endTime[2]);

         console.log(endTimeDate);
         console.log(startTimeDate);
         console.log(endTimeDate>startTimeDate);
         
        if(startTimeYear<endTimeYear){
            $(".black-mask-wrap").hide();
        } else if(startTimeYear===endTimeYear&&startTimeMonth<endTimeMonth){
            $(".black-mask-wrap").hide();
        }  else if(startTimeMonth===endTimeMonth&&startTimeDate<endTimeDate||startTimeDate==endTimeDate){
            $(".black-mask-wrap").hide();
        } else {
            alert('开始时间必须早于结束时间')
        }
         
    })
})