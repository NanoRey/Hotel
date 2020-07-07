import {store} from './index.js';
import {rooms} from './index.js';
import {clientsIn} from './index.js';
import {clientsOut} from './index.js';
import {hotelServant} from './index.js';

export function addToClientsOut(dni){
    
    const clientOutInfo=clientsIn.find((value)=>value.dni===dni);
    //console.log(dni);
    console.log(clientOutInfo);

    //se envia a clientsOut
    clientsOut.push(clientOutInfo);
    console.log(clientsOut)

    //cambiar la habitacion ocupada de true a false
    //console.log(clientsIn[0].idRoom);
    const changeRoom=rooms.findIndex((value)=>value.id===clientOutInfo.idRoom)
    //console.log( typeof clientsIn[0].idRoom);
    //console.log(typeof rooms[0].id)
    console.log(`ìndex del array ${changeRoom}`);
    rooms[changeRoom].occupied=false;
    console.log(rooms);

    // se borra de clientsIn
    const clientOutInfoIndex=clientsIn.findIndex((value)=>value.dni===dni);
    clientsIn.splice(clientOutInfoIndex,1);
    console.log(clientsIn);
    
}
