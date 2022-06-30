var proyectosid;
var $flecha;

$(document).ready(function() {
    $(this).scrollTop(0);
    // const colors = ["#E4E4E4", "#2A2A2A", "#F3F3F3", "#000000", "#515151"];
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const colors2 = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const numBalls = 100;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 95)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random() * 0.7}em`;
        ball.style.height = ball.style.width;

        balls.push(ball);
        document.body.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {

        let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

        let anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ], {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });

    document.addEventListener('mousemove', function(e) {

        var mousex = e.clientX;
        var mousey = e.clientY;

        balls.forEach(b => {

            var pos = b.getBoundingClientRect();
            var divx = Math.round(b.getBoundingClientRect().left, 2);
            var divy = Math.round(b.getBoundingClientRect().top, 2);

            var cercania = 40;

            if ((mousex - cercania) <= divx && (mousex + cercania) >= divx && (mousey - cercania) <= divy && (mousey + cercania) >= divy) {

                var xgenerado = Math.floor(Math.random() * 400);
                var ygenerado = Math.floor(Math.random() * 400);


                //  arriba derecha
                if (mousex > divx && mousey > divy) {
                    xgenerado = divx - xgenerado;
                    ygenerado = divy - ygenerado;
                    b.style.left = `${(xgenerado)}px`;
                    b.style.top = `${(ygenerado)}px`;
                    //  abajo izquireda
                } else if (mousex < divx && mousey < divy) {
                    xgenerado = divx + xgenerado;
                    ygenerado = divy + ygenerado;
                    b.style.left = `${(xgenerado)}px`;
                    b.style.top = `${(ygenerado)}px`;
                    //  abajo derecha
                } else if (mousex > divx && mousey < divy) {
                    xgenerado = divx - xgenerado;
                    ygenerado = divy + ygenerado;
                    b.style.left = `${(xgenerado)}px`;
                    b.style.top = `${(ygenerado)}px`;
                    //  arriba izquierda
                } else if (mousex < divx && mousey > divy) {
                    xgenerado = divx + xgenerado;
                    ygenerado = divy - ygenerado;
                    b.style.left = `${(xgenerado)}px`;
                    b.style.top = `${(ygenerado)}px`;


                    b.style.background = colors2[Math.floor(Math.random() * colors2.length)];
                    b.style.transform = `scale(${Math.random()})`;
                    b.style.width = `${Math.random() * 0.5}em`;
                    b.style.height = b.style.width;

                }

                //console.log("actual, x:" + divx + ",y:" + divy + ".... nuevo x:" + xgenerado + ",y:" + ygenerado + "..." + aux);

            }

        });

        //console.log("x:"+Math.round(balls[0].getBoundingClientRect().left,1)+",y:"+Math.round(balls[0].getBoundingClientRect().top),1+"      .x"+mousex+",y:"+mousey+",");
        //console.log("mouse location:", e.clientX, e.clientY,balls);
    }, false);





});

$(window).load(function() {



    $('#loader').css('transition', '1s');
    $('#test1').css('opacity', '1');
    $('#test1').css('animation', 'stretchRight 3s forwards ease-in-out');

    var pheight = $(window).height();


    $(".fullheight").each(function(index) {
        $(this).css('height', pheight + "px");
    });


    $("#proyectos").css('height', (pheight + 400) + "px");
    $("#sobremi").css('height', (pheight + 300) + "px");
    $("#skills").css('min-height', (pheight + 200) + "px");
    $("#contacto").css('height', (pheight + 200) + "px");
    $("#contacto2").css('height', (pheight + 200) + "px");






    setTimeout(function() {
        $('#loader').css('opacity', '0');
        $('#loader').css('display', 'none');
        $("body").css('overflow-y', 'scroll');


        $('.i1').addClass('slideRight');
        $('.i2').addClass('slideRighti2');
        $('.i3').addClass('slideLefti3');
        $('.i4').addClass('slideLeft');

        $('.presentacion').addClass('fadeIn');
        $('.presentacioncv').addClass('slide-in-elliptic-top-fwd');


        setTimeout(function() {
            $('.i1').addClass('floatinglento');

            $('.i2').removeClass('slideRighti2');
            $('.i2').addClass('floatinglentoi2');

            $('.i3').removeClass('slideRighti3');
            $('.i3').addClass('floatinglentoi3');

            $('.i4').addClass('floatinglento');

        }, 1000);

        //deberia ser 3000,
    }, 3000);


    $("body").mousemove(function(e) {
        var x = event.clientX; // Get the horizontal coordinate
        var y = event.clientY; // Get the vertical coordinate

        var pheight = $(window).height();
        pheight = pheight / 2;
        var wheight = $(window).width();
        wheight = wheight / 2;
        x = x - wheight;
        y = y - pheight;
        // var coor = "X coords: " + x + ", Y coords: " + y+" h:"+pheight+" wh:"+wheight;
        // console.log(coor);
        var xm = x * 0.05;
        var ym = y * 0.05;
        var xm2 = x * 0.1;
        var ym2 = y * 0.1;
        $('#seguidor').css('transform', 'translate(' + xm2 + 'px,' + ym2 + 'px)');

        $('#presentacionseguidor').css('transform', 'translate(' + xm + 'px,' + ym + 'px)');
        // $('#presentacionseguidor').css('margin-left', xm + 'px');
        // $('#presentacionseguidor').css('margin-top', xy + 'px');

    });

    $(".rd").hover(
        function() {
            $(this).removeClass('notshowrd').addClass('showrd');

        },
        function() {
            $(this).removeClass('showrd').addClass('notshowrd');
        }
    );
    // $(".presentacioncv").hover(
    //   function () {
    //       $(this).text('');

    //   },
    //   function () {
    //       $(this).text('CV');
    //   }
    // );


    $('#menuinicio').on('click', function(event) {
        disableScroll();
        event.preventDefault();
        let position = $('#portada').offset().top;
        let headerHeight = $('header').outerHeight();
        let distance = (position - headerHeight);
        distance = distance;

        $('body').velocity('scroll', {
            duration: 3500,
            offset: distance,
            queue: false,
            easing: 'easeInOutQuart',
            complete: function() {
                enableScroll();
            }

        });

    });
    $('#menusobremi').on('click', function(event) {
        disableScroll();
        event.preventDefault();
        let position = $('#sobremired').offset().top;
        let headerHeight = $('header').outerHeight();
        let distance = (position - headerHeight);
        distance = distance;

        $('body').velocity('scroll', {
            duration: 3500,
            offset: distance,
            queue: false,
            easing: 'easeInOutQuart',
            complete: function() {
                enableScroll();
            }
        });

    });
    $('#menuproyectos').on('click', function(event) {
        disableScroll();
        event.preventDefault();
        let position = $('#proyectosa').offset().top;
        let headerHeight = $('header').outerHeight();
        let distance = (position - headerHeight);
        distance = distance;

        $('body').velocity('scroll', {
            duration: 3500,
            offset: distance,
            queue: false,
            easing: 'easeInOutQuart',
            complete: function() {
                enableScroll();
            }
        });

    });
    $('#menuconocimientos').on('click', function(event) {
        disableScroll();
        event.preventDefault();
        let position = $('#skills').offset().top;
        let headerHeight = $('header').outerHeight();
        let distance = (position - headerHeight);
        distance = distance;

        $('body').velocity('scroll', {
            duration: 3500,
            offset: distance,
            queue: false,
            easing: 'easeInOutQuart',
            complete: function() {
                enableScroll();
            }
        });
    });
    $('#menucontacto').on('click', function(event) {
        disableScroll();
        event.preventDefault();
        let position = $('#contacto').offset().top;
        let headerHeight = $('header').outerHeight();
        let distance = (position - headerHeight);
        distance = distance + 200;

        $('body').velocity('scroll', {
            duration: 3500,
            offset: distance,
            queue: false,
            easing: 'easeInOutQuart',
            complete: function() {
                enableScroll();
            }
        });
    });

    $('#paginawebactual').on("click", function() {
        window.location.href = 'index.html';
    });
    $('#paginawebantigua').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/paginasweb/portfolioCesarSobrino/");
    });
    $('#paginawebjuegos').on("click", function() {
        window.open("https://zgamingz.000webhostapp.com/languages/es/inicio/");
    });
    $('#fullpageid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/javascript/fullpage/fullpagejv/");
    });
    $('#parrallaxid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/javascript/parallax/html/index.html");
    });
    $('#onscrollid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/javascript/scrollactive/");
    });
    $('#animacionesid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/css/animaciones/");
    });
    $('#loadingid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/css/loading/");
    });
    $('#socialmediaid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/css/socialnetworks/");
    });
    $('#caracruzid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/juegos/caracruz/");
    });
    $('#precisionid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/juegos/preciosion/");
    });
    $('#quieresnoviaid').on("click", function() {
        window.open("https://cesarsobrinoarribas.000webhostapp.com/Portfolio/cesar/juegos/quiereserminovia/");
    });

    proyectosid = Math.floor(Math.random() * (4)) + 1;;




    if (proyectosid == 1) {

        $('#proyectos1').css('left', '0');
        $('#proyectos2').css('left', '100%');
        $('#proyectos3').css('left', '200%');
        $('#proyectos4').css('left', '300%');

        $('#proyectos1').css('opacity', '1');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '0');

    } else if (proyectosid == 2) {

        $('#proyectos1').css('left', '-100%');
        $('#proyectos2').css('left', '0');
        $('#proyectos3').css('left', '100%');
        $('#proyectos4').css('left', '200%');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '1');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '0');
    } else if (proyectosid == 3) {

        $('#proyectos1').css('left', '-200%');
        $('#proyectos2').css('left', '-100%');
        $('#proyectos3').css('left', '0');
        $('#proyectos4').css('left', '100%');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '1');
        $('#proyectos4').css('opacity', '0');
    } else if (proyectosid == 4) {

        $('#proyectos1').css('left', '-300%');
        $('#proyectos2').css('left', '-200%');
        $('#proyectos3').css('left', '-100%');
        $('#proyectos4').css('left', '0');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '1');
    }
    $flecha = $('.flecha');

});

function toright() {


    if (proyectosid == 4) {
        proyectosid = 0;
    }
    proyectosid = proyectosid + 1;

    if (proyectosid == 1) {

        $('#proyectos1').css('left', '0');
        $('#proyectos2').css('left', '100%');
        $('#proyectos3').css('left', '200%');
        $('#proyectos4').css('left', '300%');

        $('#proyectos1').css('opacity', '1');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '0');

    } else if (proyectosid == 2) {

        $('#proyectos1').css('left', '-100%');
        $('#proyectos2').css('left', '0');
        $('#proyectos3').css('left', '100%');
        $('#proyectos4').css('left', '200%');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '1');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '0');
    } else if (proyectosid == 3) {

        $('#proyectos1').css('left', '-200%');
        $('#proyectos2').css('left', '-100%');
        $('#proyectos3').css('left', '0');
        $('#proyectos4').css('left', '100%');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '1');
        $('#proyectos4').css('opacity', '0');
    } else if (proyectosid == 4) {

        $('#proyectos1').css('left', '-300%');
        $('#proyectos2').css('left', '-200%');
        $('#proyectos3').css('left', '-100%');
        $('#proyectos4').css('left', '0');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '1');
    }
}

function toleft() {
    if (proyectosid == 1) {
        proyectosid = 5;
    }
    proyectosid = proyectosid - 1;
    if (proyectosid == 1) {

        $('#proyectos1').css('left', '0');
        $('#proyectos2').css('left', '100%');
        $('#proyectos3').css('left', '200%');
        $('#proyectos4').css('left', '300%');

        $('#proyectos1').css('opacity', '1');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '0');

    } else if (proyectosid == 2) {

        $('#proyectos1').css('left', '-100%');
        $('#proyectos2').css('left', '0');
        $('#proyectos3').css('left', '100%');
        $('#proyectos4').css('left', '200%');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '1');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '0');
    } else if (proyectosid == 3) {

        $('#proyectos1').css('left', '-200%');
        $('#proyectos2').css('left', '-100%');
        $('#proyectos3').css('left', '0');
        $('#proyectos4').css('left', '100%');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '1');
        $('#proyectos4').css('opacity', '0');
    } else if (proyectosid == 4) {

        $('#proyectos1').css('left', '-300%');
        $('#proyectos2').css('left', '-200%');
        $('#proyectos3').css('left', '-100%');
        $('#proyectos4').css('left', '0');

        $('#proyectos1').css('opacity', '0');
        $('#proyectos2').css('opacity', '0');
        $('#proyectos3').css('opacity', '0');
        $('#proyectos4').css('opacity', '1');
    }
}






// Arreglar no funciona bien

$(window).resize(function() {
    // location.reload();
    var pheight = $(window).height();;

    $(".fullheight").each(function(index) {
        $(this).css('height', pheight + "px");
    });
    var pheightmax = pheight + 400;
    $("#proyectos").css('height', pheightmax + "px");
    $("#sobremi").css('height', pheightmax + "px");
    $("#skills").css('min-height', (pheight + 200) + "px");
    $("#contacto").css('height', (pheight + 200) + "px");
    $("#contacto2").css('height', (pheight + 200) + "px");

});



$(window).scroll(function() {

    var value = window.scrollY;

    var wheight = $(window).height();
    var totald = $(document).height() - wheight;


    //value 

    // console.log(value+","+totald);

    var cuenta = value / totald;
    cuenta = cuenta * 100;

    var rounded = Math.round(cuenta * 10) / 10;



    $('.linea').css('width', rounded + '%');




    var value = window.scrollY;
    var value1 = value * 0.1;
    var value2 = value * 4;
    var value21 = value * 5;
    var value3 = value * 0.9;
    var value4 = value * 1;
    var value5 = value * 0.2;
    var value6 = value * 0.5;
    var value7 = value * 0.01;





    $('.i1').css('margin-top', "-" + value1 + 'px');
    $('.i2').css('margin-top', "-" + value2 + 'px');
    $('.i3').css('margin-top', "-" + value21 + 'px');
    $('.i4').css('margin-top', "-" + value3 + 'px');

    $('.presentacion').css('margin-top', "-" + value5 + 'px');
    //$('.ball').css('margin-top',"-"+value3+'px');
    $("body").css('background-position-y', '-' + value1 + 'px');


    // $('.sombrero').css('margin-left',value6+"px");




    var valuec = value - $("#sobremi").position().top;
    var valuemouse = valuec * 0.5;
    var valueau = valuec * 0.25;
    $('.portatil').css('transform', "translateY(-" + value5 + 'px)');
    $('.raton').css('margin-left', "-" + valuemouse + 'px');
    $('.auriculares').css('margin-left', valueau + 'px');


    var wheight = $(window).height();

    var top = window.pageYOffset || document.documentElement.scrollTop;



    if (top > 0) {
        //MOusescrolldown animacion hacia abajo
        $('.scrolldownicondiv').css('opacity', '0');

        // Botones de subir y bajar
        $('#godown').css('opacity', '0');
        $('#godown').css('transform', 'scale(0)');
        $('#goup').css('opacity', '1');
        $('#goup').css('transform', 'scale(1)');

        $('.presentacioncv').css('transition', '0.7s');
        $('.presentacioncv').css('width', '50px');
        $('.presentacioncv').css('height', '50px');
        $('.presentacioncv').css('border', '0px');
        $('.presentacioncv').css('border-radius ', '100px');
        $('.presentacioncv').text('');
        $('.presentacioncv').css('position', 'fixed');
        $('.presentacioncv').css('background-color', 'black');
        $('.presentacioncv').css('left', '100%');
        $('.presentacioncv').css('top', '0%');
        $('.presentacioncv').css('margin-top', '10px');
        $('.presentacioncv').css('margin-left', '-70px');


        $('.btnwrapper').css('transition', '0.5s');
        $('.wrapper').css('transition', '0.5s');
        // $('.wrapper').addClass('entrada');
        // $('.btnwrapper').addClass('entrada');

        $('.wrapper').css('display', 'block');

        $('.btnwrapper').css('display', 'block');

        setTimeout(function() {
                $('.wrapper').css('opacity', '1');
                $('.btnwrapper').css('opacity', '1');
                $('.presentacioncv').css('opacity', '0');
            },
            500);


    } else if (top <= 0) {
        //MOusescrolldown animacion hacia arriba

        $('.scrolldownicondiv').css('opacity', '1');

        // Botones de subir y bajar
        $('#godown').css('opacity', '1');
        $('#godown').css('transform', 'scale(1)');
        $('#goup').css('opacity', '1');
        $('#goup').css('transform', 'scale(0)');


        $('.wrapper').css('opacity', '0');
        $('.btnwrapper').css('opacity', '0');
        $('.wrapper').css('display', 'none');
        $('.btnwrapper').css('display', 'none');



        $('.presentacioncv').css('transition', '0.5s');
        $('.presentacioncv').css('opacity', '1');
        $('.presentacioncv').css('width', '100px');
        $('.presentacioncv').css('height', '100px');
        $('.presentacioncv').css('border', '1px solid #1d1d1d');
        $('.presentacioncv').css('border-radius ', '20px');
        $('.presentacioncv').text('CV');
        $('.presentacioncv').css('position', 'absolute');
        $('.presentacioncv').css('background-color', '#2a2a2a');
        $('.presentacioncv').css('left', '50%');
        $('.presentacioncv').css('top', '70%');
        $('.presentacioncv').css('margin-top', '0px');
        $('.presentacioncv').css('margin-left', '-40px');


        // setTimeout(function(){ 
        //   $('.wrapper').css('opacity', '0');
        //   $('.btnwrapper').css('opacity', '0');
        //   $('.wrapper').css('display', 'none');
        // $('.btnwrapper').css('display', 'none');
        // $('.presentacioncv').css('opacity','1');
        // }, 
        // 1000);

    }

    if (top > ($("#proyectos").position().top) - 1000) {
        var value = window.scrollY;
        value = value - ($("#proyectos").position().top - 1000);
        var valuei5 = value * 0.6;
        var valuei6 = value * 1.6;
        $('.i5').css('margin-top', "-" + valuei5 + 'px');
        $('.i6').css('margin-top', "-" + valuei5 + 'px');
        // alert("asda");
        // console.log(valuei5);
    }


    var proyectostop = $("#proyectos").position().top;
    var skillstop = $("#skills").position().top;
    var contactotop = $("#contacto").position().top;



    if (top <= 0 && top < proyectostop && top < skillstop && top < contactotop) {
        $('.menuinicial').css('transition', '0.5s');
        $(".logoimg").css('width', '200px');
        $('.menuinicial').css('height', '150px');
        $("#imagenlogo").attr("src", "../images/cesar-tr-max-black.png");
        $('.menuinicial').css('background-color', 'transparent');
        $('.linea').css('background-color', 'rgb(13, 13,13)');

    } else if (top > 0 && top < proyectostop && top < skillstop && top < contactotop) {
        $('.menuinicial').css('transition', '0.5s');
        $('.menuinicial').css('height', '70px');
        $("#imagenlogo").attr("src", "../images/cesar-tr-large-black.png");
        $('.menuinicial').css('background-color', 'transparent');
        $(".logoimg").css('width', '150px');
        $('.linea').css('background-color', 'rgb(13, 13,13)');

    } else if (top > 0 && top > (proyectostop - 100) && top < skillstop && top < contactotop) {
        $('.menuinicial').css('transition', '0.5s');
        $("#imagenlogo").attr("src", "../images/cesar-tr-large-white.png");
        $('.menuinicial').css('background-color', 'transparent');
        $('.menuinicial').css('height', '0px');
        $(".logoimg").css('width', '150px');
        $('.menuinicial').css('height', '70px');
        $('.linea').css('background-color', 'white');
    } else if (top > 0 && top >= skillstop && top > skillstop && top < contactotop) {
        $('.menuinicial').css('transition', '0.5s');
        $('.menuinicial').css('height', '70px');
        $("#imagenlogo").attr("src", "../images/cesar-tr-large-black.png");
        $('.linea').css('background-color', 'rgb(13, 13,13)');
    } else if (top > 0 && top >= skillstop && top > skillstop && top >= contactotop) {
        $('.menuinicial').css('transition', '0.5s');
        $('.menuinicial').css('height', '70px');
        $("#imagenlogo").attr("src", "../images/cesar-tr-large-white.png");
    }


    // console.log(top+"."+$("#skills").position().top);


    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var wheight = $(window).height();
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if (revealtop < wheight - revealpoint) {

            reveals[i].classList.add('show');
        } else {
            reveals[i].classList.remove('show');
        }

    }


    if (top > $('#skills').position().top) {
        $("#contacto2").css('display', 'block');
    } else {
        $("#contacto2").css('display', 'none');
    }


    var puntoshow = 400;
    var portadatop = $("#portada").position().top;
    var sobremitop = $("#sobremi").position().top - puntoshow;
    var proyectostop = $("#proyectos").position().top - puntoshow;
    var skillstop = $("#skills").position().top - puntoshow;
    var contactotop = $("#contacto").position().top - puntoshow;

    if (top > portadatop && top < sobremitop && top < proyectostop && top < skillstop && top < contactotop) {
        $("#spanmenu1").addClass('menuactives');
        $("#lineamenu1").addClass('menuactivel');
        $("#spanmenu2").removeClass('menuactives');
        $("#lineamenu2").removeClass('menuactivel');
        $("#spanmenu3").removeClass('menuactives');
        $("#lineamenu3").removeClass('menuactivel');
        $("#spanmenu4").removeClass('menuactives');
        $("#lineamenu4").removeClass('menuactivel');
        $("#spanmenu5").removeClass('menuactives');
        $("#lineamenu5").removeClass('menuactivel');

    } else if (top > portadatop && top > sobremitop && top < proyectostop && top < skillstop && top < contactotop) {
        $("#spanmenu1").removeClass('menuactives');
        $("#lineamenu1").removeClass('menuactivel');
        $("#spanmenu2").addClass('menuactives');
        $("#lineamenu2").addClass('menuactivel');
        $("#spanmenu3").removeClass('menuactives');
        $("#lineamenu3").removeClass('menuactivel');
        $("#spanmenu4").removeClass('menuactives');
        $("#lineamenu4").removeClass('menuactivel');
        $("#spanmenu5").removeClass('menuactives');
        $("#lineamenu5").removeClass('menuactivel');
    } else if (top > portadatop && top > sobremitop && top > proyectostop && top < skillstop && top < contactotop) {
        $("#spanmenu1").removeClass('menuactives');
        $("#lineamenu1").removeClass('menuactivel');
        $("#spanmenu2").removeClass('menuactives');
        $("#lineamenu2").removeClass('menuactivel');
        $("#spanmenu3").addClass('menuactives');
        $("#lineamenu3").addClass('menuactivel');
        $("#spanmenu4").removeClass('menuactives');
        $("#lineamenu4").removeClass('menuactivel');
        $("#spanmenu5").removeClass('menuactives');
        $("#lineamenu5").removeClass('menuactivel');
    } else if (top > portadatop && top > sobremitop && top > proyectostop && top > skillstop && top < contactotop) {
        $("#spanmenu1").removeClass('menuactives');
        $("#lineamenu1").removeClass('menuactivel');
        $("#spanmenu2").removeClass('menuactives');
        $("#lineamenu2").removeClass('menuactivel');
        $("#spanmenu3").removeClass('menuactives');
        $("#lineamenu3").removeClass('menuactivel');
        $("#spanmenu4").addClass('menuactives');
        $("#lineamenu4").addClass('menuactivel');
        $("#spanmenu5").removeClass('menuactives');
        $("#lineamenu5").removeClass('menuactivel');
    } else if (top > portadatop && top > sobremitop && top > proyectostop && top > skillstop && top > contactotop) {
        $("#spanmenu1").removeClass('menuactives');
        $("#lineamenu1").removeClass('menuactivel');
        $("#spanmenu2").removeClass('menuactives');
        $("#lineamenu2").removeClass('menuactivel');
        $("#spanmenu3").removeClass('menuactives');
        $("#lineamenu3").removeClass('menuactivel');
        $("#spanmenu4").removeClass('menuactives');
        $("#lineamenu4").removeClass('menuactivel');
        $("#spanmenu5").addClass('menuactives');
        $("#lineamenu5").addClass('menuactivel');
    }



});

function asd() {

    alert("fdsf");
}

function hidewrapper() {
    var wraper = $('.wrapper');
    wraper.css('clip-path', 'circle(30px at calc(100% - 45px) 35px)');
    $(".btnwrapper").css("background-image", "url(../images/menuw.png)");
    $("body").css('overflow-y', 'scroll');
    menu = true;

}


var menu = true;

function mostrarmenu(params) {
    var wraper = $('.wrapper');
    if (menu) {
        wraper.css('clip-path', 'circle(75%)');

        $(".btnwrapper").css("background-image", "url(../images/xw.png)");
        $("body").css('overflow-y', 'hidden');
        menu = false;
    } else {
        wraper.css('clip-path', 'circle(30px at calc(100% - 45px) 35px)');
        $(".btnwrapper").css("background-image", "url(../images/menuw.png)");
        $("body").css('overflow-y', 'scroll');
        menu = true;
    }

}


var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
