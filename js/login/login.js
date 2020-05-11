$(function () {
    // var data = null
    // setTimeout(function(){
    //     data =2
    // },1000)
    $(".login-btn").click(function () {
        const passwordLength = $('#password-input').val().trim().length
        const accountLength = $('#account-input').val().trim().length

        if (passwordLength === 0 || accountLength === 0) {
            alert('账号或密码不能为空')
        } else if (accountLength != 11) {
            alert("账号位数不对,请输入11位数的账号")
        } else if (passwordLength != 6) {
            alert("密码位数不正确,请输入六位数的密码")
            $('#password-input').val("")
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