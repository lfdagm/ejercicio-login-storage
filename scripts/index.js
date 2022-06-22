// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

let clickBotonInicio = document.querySelector(".login-btn");
let mensajeOculto = document.querySelector(".hidden");
let emailIngresado = document.querySelector("#email-input");
let mensajeError = document.querySelector("#error-container");
let contrasenaIngresada = document.querySelector("#password-input");
let formulario = document.querySelector("form");
let tituloBienvenida = document.querySelector("h1");
let botonCerrarSesion = document.createElement("button");
botonCerrarSesion.innerHTML = "Cerrar Sesión";
botonCerrarSesion.type = "button";
botonCerrarSesion.classList.add("logout-btn");

clickBotonInicio.addEventListener("click", function (event) {
  mensajeOculto.classList.remove("hidden");
  setTimeout(function () {
    validacionEmail(emailIngresado);
    validacionContrasena(contrasenaIngresada);
    validacionRegistro(emailIngresado, contrasenaIngresada);
    event;
  }, 3000);
});

function validacionEmail(emailIngresado) {
  let formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailIngresado.value.match(formatoEmail)) {
    return true;
  } else {
    mensajeError.classList.remove("hidden");
    mensajeError.innerHTML =
      "<small>Alguno de los datos ingresados son incorrectos</small>";
    return false;
  }
}

function validacionContrasena(contrasenaIngresada) {
  if (contrasenaIngresada.value.length >= 5) {
    return true;
  } else {
    mensajeError.classList.remove("hidden");
    mensajeError.innerHTML =
      "<small>Alguno de los datos ingresados son incorrectos</small>";
    return false;
  }
}

function validacionRegistro(emailIngresado, contrasenaIngresada) {
  baseDeDatos.usuarios.find((usuario) => {
    if (
      usuario.email === emailIngresado.value &&
      usuario.password === contrasenaIngresada.value
    ) {
      formulario.classList.add("hidden");
      tituloBienvenida.innerHTML =
        "<h1> Bienvenido al sitio " + `${usuario.name}` + " 😀 </h1>";
      tituloBienvenida.appendChild(botonCerrarSesion);
      localStorage.setItem("nombre", usuario.name);
      cerrarSesion();
      return true;
    } else {
      mensajeError.classList.remove("hidden");
      mensajeError.innerHTML =
        "<small>Alguno de los datos ingresados son incorrectos</small>";
      return false;
    }
  });
}

window.addEventListener("load", function () {
  if (localStorage.getItem("nombre") !== null) {
    formulario.classList.add("hidden");
    tituloBienvenida.innerHTML =
      "<h1> Bienvenido al sitio " +
      `${localStorage.getItem("nombre")}` +
      " 😀 </h1>";
    tituloBienvenida.appendChild(botonCerrarSesion);
    cerrarSesion();
}

});

function cerrarSesion() {
  let clickBotonCerrarSesion = document.querySelector(".logout-btn");
  clickBotonCerrarSesion.addEventListener("click", function (event) {
    localStorage.removeItem("nombre");
    tituloBienvenida.innerHTML = "<h1> Has cerrado la sesión 😀 </h1>";
    setTimeout(function () {
      location.reload();
      event;
    }, 2000);
    event;
  });
}

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */
