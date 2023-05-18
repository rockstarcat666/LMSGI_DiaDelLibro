// En vez de esto tambien se podría haber usado el atributo required en cada uno de los input
(function () {
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById(btn);

    var validarNombre = function (e) {
        if (formulario.nombre.value == 0) {
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    }

    var validarEmail = function (e) {
        if (formulario.email.value == 0) {
            alert("Completa el campo email");
            e.preventDefault();
        }
    }

    var validarTextarea = function (e) {
        if (formulario.mensaje.value == 0) {
            alert("Completa el campo mensaje");
            e.preventDefault();
        }
    }

    var validar = function (e) {
        validarNombre(e);
        validarEmail(e);
        validarTextarea(e);
    }

    formulario.addEventListener("submit", validar);
}())


