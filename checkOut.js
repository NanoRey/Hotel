import {store} from './index.js';
import {rooms} from './index.js';
import {clientsIn} from './index.js';
import {clientsOut} from './index.js';
import {hotelServant} from './index.js';

export const checkOut=(dni)=>{
    console.log(dni);
    const resultClientOut=clientsIn.find((value)=>value.dni===dni);
    console.log(resultClientOut);
    if (resultClientOut===undefined){
        document.querySelector(".errors").insertAdjacentHTML("beforeend", `<div class="alert alert-danger mt-4" role="alert">
        Este usuario <strong> no está registrado </strong> en el hotel.
        </div>`);
    }
    printBill(dni);
}

function printBill(dniClientOut){
    const resultClientOut=clientsIn.find((value)=>value.dni===dniClientOut)
    const numNights=resultClientOut.nights;
        console.log(numNights);
    const infoRoom=rooms.find((value)=>value.id===resultClientOut.idRoom)
    const priceIdRoomClient=infoRoom.price
    const moneyBild=numNights*priceIdRoomClient;
    const totalAmount= moneyBild*1.21;
       // console.log(moneyBild);

    document.querySelector("#checkOut-form").classList.add("remove");
    document.querySelector(".card").classList.remove("d-none");
    
    document.querySelector(".card-body").insertAdjacentHTML("afterbegin", 
    `<h5 class="card-title text-dark">Total a abonar <strong> ${totalAmount} €</strong></h5>
    <p class="card-text text-dark">El señor ${resultClientOut.name} con DNI: ${resultClientOut.dni}, ha estado hospedado en el hotel un total de ${resultClientOut.nights} noches</p>
    <p class="card-text text-dark"> Debe de abonar ${moneyBild} <strong> IMPUESTOS NO INCLUIDOS</strong></p>`)
    document.querySelector(".clickToCheckOut").classList.remove("d-none")
}



