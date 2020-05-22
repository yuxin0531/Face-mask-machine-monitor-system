/*
 * @Author: your name
 * @Date: 2020-05-11 11:35:44
 * @LastEditTime: 2020-05-21 08:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \systemc:\Users\yuxin\Desktop\Face mask machine monitoring system\js\login\login.js
 */
$(function () {
    // var data = null
    // setTimeout(function(){
    //     data =2
    // },1000)
    $(".login-btn").click(function () {
        const passwordLength = $('#password-input').val().trim().length;
        const accountLength = $('#account-input').val().trim().length;
        const account = $('#account-input').val();
        const password = $('#password-input').val();
        if (passwordLength === 0 || accountLength === 0) {
            alert('账号或密码不能为空')
        } else if (accountLength >20) {
            alert("账号输入格式错误")
        } else if (passwordLength >20) {
            alert("密码输入格式错误")
            $('#password-input').val("")
        } else if(account !== 'jsm'||password!=='jsm'){
            alert('账号或密码错误')
        } else {
            window.location.href = "./index.html";
            // window.location.href = "./loading.html";
            // while (data) {
            //     console.log("aaa");
                
            //     window.location.href = "./index.html";
            //     return
            // }
        }
    });
})