$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.slider').slider();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('select').material_select();
    $('.chips').material_chip();
});

$('.ancora').click(function() {
    var alvo = $(this).attr('href').split('#').pop();
    $('html, body').animate({ scrollTop: $('#' + alvo).offset().top }, 1000);
    return false;
});

$(window).scroll(function(event) {
    if (event.currentTarget.scrollY >= 200) {
        $("#buttontop").fadeIn();
    } else {
        $("#buttontop").fadeOut();
    }
});

function topo() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function fecharModal() {
    $('.button-collapse').sideNav('hide');
}