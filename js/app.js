// back audio

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "sound/back-sound.mp3");
audioElement.play();



$(document).ready(function validarForm() {
    // audios interface
    var audioError = document.createElement("audio");
    audioError.setAttribute("src", "sound/error.wav");
    audioError.setAttribute("autoplay:false", "autoplay");
    var audioElement2 = document.createElement("audio");
    audioElement2.setAttribute("src", "sound/sweep.mp3");
    audioElement2.setAttribute("autoplay:false", "autoplay");
    var audioElement3 = document.createElement("audio");
    audioElement3.setAttribute("src", "sound/bells.wav");
    audioElement3.setAttribute("autoplay:false", "autoplay");
    var audioElement4 = document.createElement("audio");
    audioElement4.setAttribute("src", "sound/coins.mp3");
    audioElement4.setAttribute("autoplay:false", "autoplay");
    //botones primer bloque 
    $("#button1").fadeIn();
    $("#arrowizq1").fadeIn();
    $("#form1").fadeIn();
    //validación primer bloque
    $("#button1").on('click', function() {
        var nombre = $('#nombre').val(),
            apellidoMat = $('#apellidoMat').val(),
            apellidoPat = $('#apellidoPat').val(),
            date = $('#nacimiento').val();
        if (nombre == "") {
            $("#nombre").addClass("error");
            audioError.play();
            return false;
        } else {
            $("#nombre").addClass("valid");
            if (apellidoPat == "") {
                $("#apellidoPat").addClass("error");
                audioError.play();
                return false;
            } else {
                $("#apellidoPat").addClass("valid");
                if (apellidoMat == "") {
                    $("#apellidoMat").addClass("error");
                    audioError.play();
                    return false;
                } else {
                    $("#apellidoMat").addClass("valid");
                    if (date == "") {
                        $("#nacimiento").addClass("error");
                        audioError.play();
                        return false;
                    } else {
                        $("#nacimiento").addClass("valid");
                        audioElement2.play();
                        $("#button1").fadeOut();
                        $("#button2").fadeIn();
                        $("#machine1").addClass("animSlot1");
                        $("#machine2").addClass("animSlot2");
                        $("#machine3").addClass("animSlot3");
                        $("#form1").addClass("margin2");
                        $("#arrowder1").fadeIn();
                        $("#arrowizq1").fadeOut();
                        $("#arrowizq2").fadeIn();
                    }
                }

            }
        }
    });
    //flechas para moverse entre bloques
    $("#arrowizq1").on('click', function() {
        $("#form1").addClass("margin2")
        $("#arrowder1").fadeIn();
        $("#arrowizq1").fadeOut();
        $("#arrowizq2").fadeIn();
    });

    $("#arrowizq2").on('click', function() {
        $("#form1").addClass("margin3")
        $("#arrowder2").fadeIn();
        $("#arrowder1").fadeOut();
        $("#arrowizq2").fadeOut();

    });

    $("#arrowder1").on('click', function() {
        // $("#form1").addClass("margin1")
        $("#form1").removeClass("margin2")
        $("#arrowder1").fadeOut();
        $("#arrowizq1").fadeIn();
        $("#arrowizq2").fadeOut();
    });

    $("#arrowder2").on('click', function() {
        $("#form1").removeClass("margin3")
        $("#arrowder2").fadeOut();
        $("#arrowder1").fadeIn();
        $("#arrowizq2").fadeIn();
    });
    //validaciones segundo bloque
    $("#button2").on('click', function() {
        var cel = $('#celular').val(),
            confirmCel = $('#confirmaCel').val(),
            email = $('#email').val();
        if (cel == "") {
            $("#celular").addClass("error")
            audioError.play();
            return false;
        } else {
            $("#celular").addClass("valid")
            if (confirmCel == "") {
                audioError.play();
                $("#confirmaCel").addClass("error")
                return false;
            } else {
                $("#confirmaCel").addClass("valid")
                if (cel != confirmCel) {
                    audioError.play();
                    $("#celular").removeClass("valid")
                    $("#confirmaCel").removeClass("valid")
                    $("#celular").addClass("error")
                    $("#confirmaCel").addClass("error")
                    return false;
                } else {
                    $("#celular").addClass("valid")
                    $("#confirmaCel").addClass("valid")
                    if (email == "") {
                        $("#email").addClass("error");
                        audioError.play();
                    } else {
                        $("#email").addClass("valid");
                        $("#button2").fadeOut();
                        $("#button3").fadeIn();
                        audioElement2.play();
                        $("#machine2").addClass("animSlot4");
                        $("#machine3").addClass("animSlot5");
                        $("#form1").addClass("margin3");
                        $("#arrowder2").fadeIn();
                        $("#arrowder1").fadeOut();
                        $("#arrowizq2").fadeOut();
                    }
                }
            }
        }

    });
    //funciones checkboxes sexo
    $("#masc").on("click", function() {
        $(".fem").prop("checked", false, this.checked);
    });

    $("#fem").on("click", function() {
        $(".masc").prop("checked", false, this.checked);
    });

    //Validaciones tercer bloque y validación general de los tres bloques, con retorno de error por bloque de formulario

    $("#button3").on('click', function() {

        //variables expresiones simuladas, cambiar por las de space

        var expName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        var expMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        var expCel = /^[0-9]{10}$/;
        var expCode = /^[0-9]{5}$/;
        var expPin = /^[0-9]{4}$/;

        //variables campos tres bloques segunda validación general

        var nombre = $('#nombre').val(),
            apellidoMat = $('#apellidoMat').val(),
            apellidoPat = $('#apellidoPat').val(),
            date = $('#nacimiento').val(),
            cel = $('#celular').val(),
            confirmCel = $('#confirmaCel').val(),
            email = $('#email').val(),
            cp = $('#codPost').val(),
            pin = $('#pin').val(),
            confirm = $('#confirmaPin').val();
        if (!expName.test(nombre)) {
            $("#nombre").removeClass("valid");
            $("#nombre").addClass("error");
            $("#form1").removeClass("margin3");
            $("#form1").removeClass("margin2");
            $("#arrowder1").fadeOut();
            $("#arrowder2").fadeOut();
            $("#arrowizq2").fadeOut();
            $("#arrowizq1").fadeIn();

            audioError.play();
            return false;
        } else {
            $("#nombre").addClass("valid");
            if (!expName.test(apellidoPat)) {
                $("#apellidoPat").addClass("error");
                $("#apellidoPat").removeClass("valid");
                $("#form1").removeClass("margin3");
                $("#form1").removeClass("margin2");
                $("#arrowder1").fadeOut();
                $("#arrowder2").fadeOut();
                $("#arrowizq2").fadeOut();
                $("#arrowizq1").fadeIn();
                audioError.play();
                return false;
            } else {
                $("#apellidoPat").addClass("valid");
                if (!expName.test(apellidoMat)) {
                    $("#apellidoMat").addClass("error");
                    $("#apellidoMat").removeClass("valid");
                    $("#form1").removeClass("margin3");
                    $("#form1").removeClass("margin2");
                    $("#arrowder1").fadeOut();
                    $("#arrowder2").fadeOut();
                    $("#arrowizq2").fadeOut();
                    $("#arrowizq1").fadeIn();
                    audioError.play();
                    return false;
                } else {
                    $("#apellidoMat").addClass("valid");
                    if (date == "") {
                        $("#nacimiento").addClass("error");
                        audioError.play();
                        return false;
                    } else {
                        $("#nacimiento").addClass("valid");
                        if (!expCel.test(cel)) {
                            $("#celular").addClass("error");
                            $("#celular").removeClass("valid");
                            $("#form1").removeClass("margin3");
                            $("#form1").addClass("margin2");
                            $("#arrowder1").fadeIn();
                            $("#arrowder2").fadeOut();
                            $("#arrowizq1").fadeOut();
                            $("#arrowizq2").fadeIn();
                            audioError.play();
                            return false;
                        } else {
                            $("#celular").addClass("valid")
                            if (!expCel.test(confirmCel)) {
                                audioError.play();
                                $("#confirmaCel").addClass("error");
                                $("#confirmaCel").removeClass("valid");
                                $("#form1").removeClass("margin3");
                                $("#form1").addClass("margin2");
                                $("#arrowder1").fadeIn();
                                $("#arrowder2").fadeOut();
                                $("#arrowizq1").fadeOut();
                                $("#arrowizq2").fadeIn();
                                return false;
                            } else {
                                $("#confirmaCel").addClass("valid")
                                if (cel != confirmCel) {
                                    audioError.play();
                                    $("#celular").removeClass("valid")
                                    $("#confirmaCel").removeClass("valid")
                                    $("#celular").addClass("error")
                                    $("#confirmaCel").addClass("error")
                                    return false;
                                } else {
                                    $("#celular").addClass("valid")
                                    $("#confirmaCel").addClass("valid")
                                    if (!expMail.test(email)) {
                                        $("#email").addClass("error");
                                        $("#email").removeClass("valid");
                                        $("#form1").removeClass("margin3");
                                        $("#form1").addClass("margin2");
                                        $("#arrowder1").fadeIn();
                                        $("#arrowder2").fadeOut();
                                        $("#arrowizq1").fadeOut();
                                        $("#arrowizq2").fadeIn();
                                        audioError.play();
                                    } else {
                                        $("#email").addClass("valid");
                                        if (cp == "" || !expCode.test(cp)) {
                                            $("#codPost").addClass("error");
                                            $("#codPost").removeClass("valid");
                                            $("#form1").addClass("margin3");
                                            $("#arrowder2").fadeIn();
                                            $("#arrowder1").fadeOut();
                                            $("#arrowizq2").fadeOut();
                                            $("#arrowizq2").fadeOut();
                                            audioError.play();
                                            return false;
                                        } else {
                                            $("#codPost").addClass("valid")
                                            if (pin == "" || !expPin.test(pin)) {
                                                $("#pin").addClass("error");
                                                $("#pin").removeClass("valid");
                                                $("#form1").addClass("margin3");
                                                $("#arrowder2").fadeIn();
                                                $("#arrowder1").fadeOut();
                                                $("#arrowizq2").fadeOut();
                                                $("#arrowizq2").fadeOut();
                                                audioError.play();
                                                return false;
                                            } else {
                                                $("#pin").addClass("valid")
                                                if (confirm == ""  || !expPin.test(confirm)) {
                                                    audioError.play();
                                                    $("#confirmaPin").addClass("error");
                                                    $("#confirmaPin").removeClass("valid");
                                                    $("#form1").addClass("margin3");
                                                    $("#arrowder2").fadeIn();
                                                    $("#arrowder1").fadeOut();
                                                    $("#arrowizq2").fadeOut();
                                                    $("#arrowizq2").fadeOut();
                                                    return false;
                                                } else {
                                                    $("#confirmaPin").addClass("valid")
                                                    if (pin != confirm) {
                                                        audioError.play();
                                                        $("#pin").removeClass("valid")
                                                        $("#confirmaPin").removeClass("valid")
                                                        $("#pin").addClass("error")
                                                        $("#confirmaPin").addClass("error")
                                                        $("#form1").addClass("margin3");
                                                        return false;
                                                    } else {
                                                        audioElement2.play();
                                                        $("#machine3").addClass("animSlot6");
                                                        $("#form1").addClass("margin3");
                                                        setTimeout(function() {
                                                            $("#slotBar").fadeOut();
                                                            $("#slotForm").fadeOut();
                                                            $("#monedas").fadeIn()
                                                            $("#completeForm").fadeIn()
                                                            $("#button3").fadeOut();
                                                            $("#arrowizq2").fadeOut();
                                                            $("#arrowder2").fadeOut();
                                                            $("#arrowder1").fadeOut();
                                                            $("#arrowizq1").fadeOut();
                                                            audioElement3.play();
                                                            audioElement4.play();
                                                        }, 2500);

                                                    }



                                                }
                                            }
                                        }

                                    }
                                }

                            }
                        }
                    }
                }

            }
        }







    });
});

// Términos y condiciones
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');
var overlay2 = document.getElementById('overlay2');
var popup2 = document.getElementById('popup2');
var btnTerms = document.getElementById('btn-term');
var btnPriv = document.getElementById('btn-priv');

function abrirPopup() {
    overlay.classList.add('active');
    popup.classList.add('active');
}

function abrirPopup2() {
    overlay2.classList.add('active');
    popup2.classList.add('active');
}

btnTerms.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

btnPriv.addEventListener('click', function() {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});