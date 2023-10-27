$(document).ready(function() {
    const fondo = $(".fondo");
    const loginlink = $(".login-link");
    const registrarlink = $(".registrar-link");
    const btn = $(".btn");
    const iconocerrar = $(".icono-cerrar");

    registrarlink.on("click", function() {
        fondo.addClass('active');
        $(".contenedor-form.login").css({"transform": "translateX(-400px)", "opacity": "0"});
        $(".contenedor-form.registrar").css("transform", "translateX(0)");
    });

    loginlink.on("click", function() {
        fondo.removeClass('active');
        $(".contenedor-form.registrar").css({"transform": "translateX(400px)", "opacity": "0"});
        $(".contenedor-form.login").css({"transform": "translateX(0)", "opacity": "1"});
    });

    btn.on("click", function() {
        fondo.addClass('active-btn');
    });

    iconocerrar.on("click", function() {
        fondo.removeClass('active-btn');
    });
});
