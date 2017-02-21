onload = function(){

  // var captcha= Math.floor(Math.random()*(1000-10000))+10000;
  // document.getElementById('ncap').innerHTML=captcha;
  var formulario = document.forms[0];
}

  function validar(){
    var err = document.getElementById('resultado');
    var errList ="";
    var ret = true;

    //validamos el nombre
    var nom = document.getElementsByName('nombre')[0].value;
    console.log(nom);
    if (nom == null || nom.length == 0 || !(/^\S+$/.test(nom))){
         errList += "El nombre es erróneo <br/>"
         ret = false;
    }
    //validamos apellidos:
      var apellidos = document.getElementsByName('apellidos')[0].value;
          if (apellidos == null || apellidos.length == 0 || !(/^\S+[\s+\S]*$/.test(apellidos))){
            ret = false;
            errList += "Hay un error en los apellidos <br/>";
          }

    //Email
    var email = document.getElementsByName("email")[0].value;
    console.log(email);
    if ( !/^\w+@\w+\.\w+$/.test(email) ){
      errList += "El email es incorrecto <br/>";
      ret = false;
    }
    //Telefono
      var tel = document.getElementsByName('telefono')[0].value;
      if (isNaN(tel) || !(/^\d{9,10}$/.test(tel))){
        errList += "El teléfono es erróneo <br/>";
        ret = false;
      }

      // var cap = document.getElementById("captcha").value;
      //
      // if (captcha != cap){
      //   errList += "Captcha incorrecto <br/>";
      //   ret = false;
      // }


      if (ret){
        errList = "Tu petición se ha enviado correctamente";
        err.style.color="green";
        document.getElementsByName('nombre')[0].value = "";
        document.getElementsByName('apellidos')[0].value= "";
        document.getElementsByName("email")[0].value= "";
        document.getElementsByName('telefono')[0].value= "";
      }else{
        err.style.color="red";
      }
      err.innerHTML = errList;
      return ret;
}
