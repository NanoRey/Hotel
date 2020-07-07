import {store} from './index.js';
import {rooms} from './index.js';
import {clientsIn} from './index.js';
import {clientsOut} from './index.js';
import {hotelServant} from './index.js';

// export const store = { rooms: [], clients: [], clientsOut:[]};
// export const rooms = [
//   { id: 1, beds: 2, price: 50, occupied: true },
//   { id: 2, beds: 3, price: 75, occupied: true },
//   { id: 3, beds: 2, price: 50, occupied: false },
//   { id: 4, beds: 4, price: 100, occupied: false },
//   { id: 5, beds: 5, price: 125, occupied: false },
//   { id: 6, beds: 6, price: 150, occupied: false },
//   { id: 7, beds: 4, price: 100, occupied: false },
// ];
// export const clientsIn = [
//   { dni: "447858F", name: "Adolfo", adults: 1, kids: 3, nights: 2, idRoom: 5 },
//   { dni: "555858V", name: "Miguel", adults: 2, kids: 0, nights: 7, idRoom: 1 },
//   { dni: "443458C", name: "Manuel", adults: 2, kids: 2, nights: 3, idRoom: 4 },
//   { dni: "777858A", name: "João", adults: 2, kids: 3, nigths: 5, idRooms: 6 },
// ];
// export const hotelServant=[
//     { dni: "47382999D", name: "Nano", password: "123456"},
//     { dni: "0000000000A", name: "XX", password: "123456"},
//     { dni: "1111111111A", name: "YY", password: "123456"}
// ];

// export const clientsOut=[];


export const checkIn=()=>{
    //Creo un objeto con todos los datos del nuevo cliente. DNI, nombre, adultos, niños, noches, idRoom
    const dni=document.querySelector("#DNI").value
    const name=document.querySelector("#name").value
    const numAdults=document.querySelector("#numAdults").value
    const numKids=document.querySelector("#numKids").value
    const NumNights=document.querySelector("#numNights").value
    // const obj={dni, name, adults: numAdults, kids: numKids, nights: NumNights, idRoom:"" };
    // console.log(obj);


    // Compruebo si existen los datos en el array de clientsOut.


    // ordenar el array de rooms por capacidad
    orderRooms();
    console.log(rooms);

    //Buscamos disponibilidad de habitaciones con la suma de adults
   
    const bedsNeedByClient=parseInt(numAdults)+parseInt(numKids);
    console.log(bedsNeedByClient);
    //const bedsNeedByClient=1;

    //Limpio rooms de habitaciones ocupadas
    const freeRooms=rooms.filter((value)=> value.occupied===false)
    console.log(freeRooms);

    //const freeRoomToClient=rooms.find((value)=>value.beds>numAdults+numKids);
    const freeRoomToClient=freeRooms.find((value)=>value.beds>=bedsNeedByClient);
    console.log(freeRoomToClient);
    if(freeRoomToClient===undefined){
        document.querySelector(".errors").insertAdjacentHTML("beforeend", `<div class="alert alert-danger mt-4" role="alert">
        Lo siento, no hay habitaciones disponibles
        </div>`);
    }
    
    //Creo obj con el nuevo cliente y la habitacion que le corresonde.
    const objNewClient={dni, name, adults: numAdults, kids: numKids, nights: NumNights, idRoom: freeRoomToClient.id}
    console.log(objNewClient);

    // añado cliente con push a clientsIn
    clientsIn.push(objNewClient);
    console.log(clientsIn);

    //cambio habitacion de true a false occupied en rooms
    const indexArray=rooms.findIndex((value)=>value.id===objNewClient.idRoom)
    console.log(indexArray);
    rooms[indexArray].occupied=true;
    console.log(rooms);

    //compruebo que en store esta el nuevo cliente y rooms completo con habitacion cambiada.
    console.log(clientsIn);
    console.log(store);
    document.querySelector(".errors").insertAdjacentHTML("beforeend",`<div class="alert alert-success mt-4" role="alert">
    El señor ${name} y sus invitados se hospedaran en la habitacion <strong>${objNewClient.idRoom}</strong>
    </div>`)

}


const orderRooms=()=>{
    rooms.sort((a,b)=> a.beds-b.beds);
}