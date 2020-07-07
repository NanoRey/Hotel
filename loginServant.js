// Esta funcion permite loguearse al personal del hotel 
// para acceder a la info de los clientes. Si no es empleado,
// no puede acceder a la info.Esta

import {store} from './index.js';
import {rooms} from './index.js';
import {clientsIn} from './index.js';
import {hotelServant} from './index.js';

export const loginServant= ()=>{
    const hotelUser=document.querySelector("#DNIempleado")
    const result=hotelServant.find((value)=>value.dni===hotelUser.value);
    if (result===undefined){
        document.querySelector(".errors").insertAdjacentHTML("beforeend", `<div class="alert alert-danger mt-4" role="alert">
        El usuario no existe!
      </div>`)
      return;
    }

    const hotelPass=document.querySelector("#passwordLogin")
    const resultPass=hotelServant.findIndex((value)=> value.password===hotelPass.value);
    if (resultPass===-1){
      // console.log(resultPass);  
      // console.log(hotelServant);
      //   console.log(hotelPass)
      //   console.log(hotelServant[0].password)
      //   console.log(hotelPass.value)
      //   console.log(typeof hotelPass.value);

      document.querySelector(".errors").insertAdjacentHTML("beforeend", `<div class="alert alert-danger mt-4" role="alert">
      La contraseña no es correcta!
      </div>`)
      return;

    }
    //Mensaje de datos calidados y tras 1 segundo se abreel formulario de ceckIn.
    
    document.querySelector("#checkIn-button").classList.remove("d-none");
    document.querySelector("#checkOut-button").classList.remove("d-none");
    document.querySelector("#info-button").classList.remove("d-none");
    document.querySelector("#changeRoom-button").classList.remove("d-none");

    document.querySelector(".login-container").classList.add("d-none");
    return;
};