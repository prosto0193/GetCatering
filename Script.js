$(document).ready(function () {
    var ot = $('.ot_pers').html();
    var to = $('.to_pers').html();
    var price = $('.price_menu_span').html();
    $(window).load(function () {
        $('.count_person').html("<b>" + ot + "</b>");
        $('.price_span').html(price);
    })
    var count = ot;
    $('#pl').click(function () {
        if (count == to) {
            count = to;
        } else {
            count++;
            $('.count_person').html("<b>" + count + "</b>");
            $('.price_span').html(parseInt(price / ot * count));
        }
    })
    $('#min').click(function () {
        if (count == ot) {
            count = ot;
        } else {
            count--;
            $('.count_person').html("<b>" + count + "</b>");
            $('.price_span').html(parseInt(price / ot * count));
        }
    });

    $('.form-check-input').click(function () {
        if ($('.form-check-input').is(':checked')) {
            $('.password_text').attr('type', 'text');
        } else {
            $('.password_text').attr('type', 'password');
        }
    })

    $('.ch_1').click(function () {
        if ($('.ch_1').is(':checked')) {
            $('.password_text_first').attr('type', 'text');
        } else {
            $('.password_text_first').attr('type', 'password');
        }
    })

    $('.ch_2').click(function () {
        if ($('.ch_2').is(':checked')) {
            $('.password_text_second').attr('type', 'text');
        } else {
            $('.password_text_second').attr('type', 'password');
        }
    })

    $('#vhod').click(function () {
        if ($('.password_text').val() == '' || $('.login_text').val() == '') {
            $('.tit_error').html('<b style="color: red;">Поля не должны быть пустыми</b>');
        } else {
            $('.tit_error').html('<b style="color: green;">Success</b>');
        }
    })

    var fl_len = 0;
    var fl_let = 0;
    var fl_cap = 0;
    var fl_num = 0;

    $('.check_in_end').click(function () {
        if ($('.fio_text').val() == '' || $('.email_text').val() == '' || $('.password_text_first').val() == '' ||
            $('.password_text_second').val() == '') {
            $('.tit_error').html('<b style="color: red;">Поля не должны быть пустыми</b>');
        } else {
            if (fl_cap == 0 || fl_len == 0 || fl_let == 0 || fl_num ==0){
                $('.tit_error').html('<b style="color: red;">Не выполнены условия</b>');
            }else{
                if ($('.password_text_second').val() != $('.password_text_first').val()) {
                    $('.tit_error').html('<b style="color: red;">Пароли не совпадают</b>');
                } else {
                    $('.tit_error').html('<b style="color: green;">Success</b>');
                }
            }
        }
    })

    $('.password_text_first').keyup(function () {
        var pass = $(this).val();
        if (pass.length > 8) {
            $('#len').removeClass('len_er').addClass('len');
            $('.text_len').html('<b> ✔️ Не менее 8 символов</b>');
            fl_len = 1;
        } else {
            $('#len').removeClass('len').addClass('len_er');
            $('.text_len').html('<b>Не менее 8 символов</b>');
            fl_len = 0;
        }

        if (pass.match(/[A-z]/)) {
            $('#letter').removeClass('letter_er').addClass('letter');
            $('.text_let').html('<b> ✔️ Минимум одна буква</b>');
            fl_let = 1;
        } else {
            $('#letter').removeClass('letter').addClass('letter_er');
            $('.text_let').html('<b>Минимум одна буква</b>');
            fl_let = 0;
        }

        if (pass.match(/[A-Z]/)) {
            $('#cap').removeClass('cap_er').addClass('cap');
            $('.text_cap').html('<b> ✔️ Минимум одна заглавная буква</b>');
            fl_cap = 1;
        } else {
            $('#cap').removeClass('cap').addClass('cap_er');
            $('.text_cap').html('<b>Минимум одна заглавная буква</b>');
            fl_cap = 0;
        }

        if (pass.match(/[0-9]/)) {
            $('#number').removeClass('number_er').addClass('number');
            $('.text_nam').html('<b> ✔️ Минимум одна цифра</b>');
            fl_num = 1;
        } else {
            $('#number').removeClass('number').addClass('number_er');
            $('.text_nam').html('<b>Минимум одна цифра</b>');
            fl_num = 0;
        }
    })

});