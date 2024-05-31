let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

  email = id("email"),
  contraseña = id("contraseña"),
  formulario = id("formulario"),
  
  msjError = classes("error"),
  iconoExito = classes("success-icon"),
  failureIcon = classes("failure-icon");
  form.addEventListener("enviar", (e) => {
    e.preventDefault();
  });
let motor = (id, serial, mensaje) 
   
  function motor(id, serial, mensaje) {

  if (id.value.trim() === "") {
  }

  else {
  }
}

  let motor =(id, serial, mensaje) => {

    if (id.value.trim() === "") {
      msjError[serial].innerHTML = mensaje;
    } 
    
    else {
      msjError[serial].innerHTML = "";
    }
  
  }

  function motor(id, serial, mensaje) {


  if (id.value.trim() === "") {
    msjError[serial].innerHTML = mensaje;
    id.style.border = "2px solid red";

    // iconos
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }

  else {
    msjError[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // iconos
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
 }
  form.addEventListener("enviar", (e) => {
    e.preventDefault();
  
    
    motor(correoElectronico, 1, "El correo electrónico no puede estar en blanco");
    motor(contraseña, 2, "La contraseña no puede estar en blanco");
  });
