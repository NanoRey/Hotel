import {store} from './index.js';
import {rooms} from './index.js';
import {clientsIn} from './index.js';
import {clientsOut} from './index.js';
import {hotelServant} from './index.js';

// export const rooms = [
//     { id: 1, beds: 2, price: 50, occupied: true },

// const clientsIn = [
//     { dni: "447858F", name: "Adolfo", adults: 1, kids: 3, nights: 2, idRoom: 5 },

export function informationHotel(){
    const tableRooms=rooms.filter((value)=>value.id>0);
    console.log(tableRooms);

    rooms.forEach((value,index)=>{
        document.querySelector(".tBodyRooms").insertAdjacentHTML("afterbegin", `
            <tr>
                <th scope="row">${rooms[index].id}</th>
                <td>${rooms[index].beds}</td>
                <td>${rooms[index].price}</td>
                <td>${rooms[index].occupied}</td>
            </tr>`)
    })

    clientsIn.forEach((value,index)=>{
        document.querySelector(".tBodyClientsIn").insertAdjacentHTML("afterbegin", `
        <tr>
            <th scope="row">${clientsIn[index].dni}</th>
            <td>${clientsIn[index].name}</td>
            <td>${clientsIn[index].nights}</td>
            <td>${clientsIn[index].idRoom}</td>
        </tr>`)   
    })

    clientsOut.forEach((value,index)=>{
        document.querySelector(".tBodyClientsOut").insertAdjacentHTML("afterbegin", `
        <tr>
            <th scope="row">${clientsOut[index].dni}</th>
            <td>${clientsOut[index].name}</td>
            <td>${clientsOut[index].nights}</td>
            <td>${clientsOut[index].idRoom}</td>
        </tr>`)   
    });
};
