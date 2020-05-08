$(function () {
    $.ajax({
        url: "../json/cameraList.json",
        type: "get",
        success: function (data) {
            const cameraList = data.cameraList
            console.log(cameraList);
            for (i = 0; i < cameraList.length; i++) {
                $('.monitoring-main').append(`<ul class="monitoring">
                <li class="serial">${cameraList[i].id}</li>
                <li class="name">${cameraList[i].name}</li>
                <li>${cameraList[i].position}</li>
            </ul>`)
                $(".monitoring").css({
                    "display": "flex",
                    "align-items": "space-between"
                })
                $('li').css("margin-bottom", "8px")
                $('.serial').css("margin-right", "65px")
                $('.name').css("margin-right", "95px")
                // $('.monitoring-three').children('.serial').text(cameraList[i].id)
            }
        }
    });
})