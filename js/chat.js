$(document).ready(function () {
    $(".btn-success").click(function () {
        $(".all").toggleClass("active");
    })

    var User = function () {
        var step = 0;
        var value = $('#input_text').val();
        //  alert("Kichik herifle bashlayaraq ismaricinizi daxil edirsiniz")
        step++;
        var userName = $('<div>', {
            'id': 'maindiv',
            'class': 'message' + step,
            'text': $('#input_text').val(),
        }).append('<img id="theImg" src="img/2.png" />').append("<hr>").appendTo('.main').click(function () {
            $(".trash").addClass("trash_active");
            $(this).addClass("selected");
            $(this).siblings("#maindiv").removeClass("selected");
            $(".trash").unbind().click(function () {
                var r = confirm("Silmeye eminsiniz mi?");
                if (r == true) {
                    $(".selected").remove();
                    $(".trash").removeClass("trash_active");
                }
            })
        });
        $('#input_text').val('');
        $('.main').animate({
            scrollTop: $('.main').prop("scrollHeight")
        }, 500);
    }

    var Admin = function () {
        var step = 0;
        var value = $('#input_text').val();
        //  alert("Boyuk herifle bashlayaraq ismaricinizi daxil edirsiniz")
        step++;
        var userName = $('<div>', {
            'id': 'admindiv',
            'class': 'message' + step,
        }).append('<img id="theImg" src="img/call.jpg" />').append(value).append("<hr>").appendTo('.main').click(function () {
            $(".trash").addClass("trash_active");
            $(this).addClass("selected");
            $(this).siblings("#admindiv").removeClass("selected");
            $(".trash").unbind().click(function () {
                var r = confirm("Silmeye eminsiniz mi?");
                if (r == true) {
                    $(".selected").remove();
                    $(".trash").removeClass("trash_active");
                }
            })
        });
        $('#input_text').val('');
        $('.main').animate({
            scrollTop: $('.main').prop("scrollHeight")
        }, 500);
    }

    // btn click add div
    $('.btn-primary').on('click', function (e) {
        var value = $('#input_text').val();
        if ($('#input_text').val() != null && $('#input_text').val()[0] == $('#input_text').val()[0].toLowerCase()) {
            e.preventDefault();
            User();
        } else {
            Admin();
        }
    });
    //enter add div
    $('#input_text').keypress(function (event) {
        var value = $('#input_text').val();
        if (event.keyCode == 13 && $('#input_text').val()[0] == $('#input_text').val()[0].toLowerCase()) {
            User();
            responsiveVoice.speak("sent message")

        } else if (event.keyCode == 13 && $('#input_text').val()[0] == $('#input_text').val()[0].toUpperCase()) {
            Admin();
            responsiveVoice.speak("sent message")
        }

    })
    // $(".main").on('scroll', function () {
    //     if ($(this).scrollTop() > 300) {
    //         $(".main .sec1").addClass('fixed');
    //     } else {
    //         $(".main .sec1").removeClass('fixed');
    //     }
    // });
    $("#smiley").click(function () {
        $('#input_text').val($('#input_text').val() + $('#smiley').html());
    });
    $("#smiley1").click(function () {
        $('#input_text').val($('#input_text').val() + $('#smiley1').html());
    });
    $("#smiley2").click(function () {
        $('#input_text').val($('#input_text').val() + $('#smiley2').html());
    });
    $("#smiley3").click(function () {
        $('#input_text').val($('#input_text').val() + $('#smiley3').html());
    });
    $("#smiley4").click(function () {
        $('#input_text').val($('#input_text').val() + $('#smiley4').html());
    });
    $("#smiley5").click(function () {
        $('#input_text').val($('#input_text').val() + $('#smiley5').html());
    });
    $("#smiley6").click(function () {
        $('#input_text').val($('#input_text').val() + $('#smiley6').html());
    });
})