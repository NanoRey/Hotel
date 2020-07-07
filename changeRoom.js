import {store} from './index.js';
import {rooms} from './index.js';
import {clientsIn} from './index.js';
import {clientsOut} from './index.js';
import {hotelServant} from './index.js';

export function changeRoom(dni){
    const resultDni=clientsIn.find((value)=>value.dni===dni);
    //console.log(dni)
    //console.log(resultDni);
    if(resultDni===undefined){
        document.querySelector(".errors").insertAdjacentHTML("beforeend", `<div class="alert alert-danger mt-4" role="alert">
        Este usuario <strong> no está registrado </strong> en el hotel.
        </div>`);
        return;
    }
    document.querySelector(".errors").insertAdjacentHTML("beforeend", `<div class="alert alert-success mt-4" role="alert">
        Este usuario tiene asignada la habitacion numero <strong> ${resultDni.idRoom} </strong> en el hotel.
        </div>`);
    
    //compruebo habitaciones libres
    const freeRooms=rooms.filter((value)=>value.occupied===false);
    console.log(freeRooms);
    freeRooms.forEach((value,index)=>{
        const number=index+1;
        //console.log(number);
        document.querySelector(".rowSelectors").insertAdjacentHTML("beforeend", `
        <div class="custom-control custom-radio custom-control-inline" id="toggleSelecction">
        <input type="radio" id="customRadioInline${number}" name="customRadioInline1" class="custom-control-input">
        <label class="custom-control-label" for="customRadioInline${number}">La habitacion numero ${rooms[index].id} tiene ${rooms[index].beds} camas</label>
        </div>
        `)
    });
        
    const selectRoomToChange=document.querySelector(".rowSelectors");
    selectRoomToChange.addEventListener("click", event=>{
        event.preventDefault();
        function changeRoom(){
            // const dni=document.querySelector("#DNI-ChangeRoom").value
            console.log(dni);
            const clientToChangeRoom=clientsIn.find((value)=>value.dni===dni)
            console.log(clientToChangeRoom);
            //cambiar habitacion pasada de true a false
            const changeRoomNoOccupied=rooms.find((value)=>value.id===clientToChangeRoom.idRoom);
            changeRoomNoOccupied.occupied===false;
            
            //asignar nuevo numero de habitacion
            clientToChangeRoom.idRoom=2;

            const changeRoomOccupied=rooms.find((value)=>value.id===clientToChangeRoom.idRoom);
            changeRoomOccupied.occupied===true;
        };

        changeRoom();
        document.querySelector(".errors").innerHTML="";
        const clientToChangeRoomInfo=clientsIn.find((value)=>value.dni===dni)
        document.querySelector(".errors").insertAdjacentHTML("beforeend", `<div class="alert alert-success mt-4" role="alert">
        La nueva habitación asignada es la numero <strong> ${clientToChangeRoomInfo.idRoom} </strong> en el hotel.
        </div>`);

        console.log(rooms);
        console.log(clientsIn);
        console.log(store);
        
    })
}



