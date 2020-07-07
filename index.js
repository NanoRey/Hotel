// Aqui tiene que estar el store y todas las funciones que interaccionen con el HTML.


import {loginServant} from './loginServant.js';
import {checkIn} from './checkIn.js';
import {checkOut} from './checkOut.js';
import {addToClientsOut} from './addtoClientOut.js';
import {informationHotel} from './infoClientsInOut.js';
import {changeRoom} from './changeRoom.js';
//import {changeRoom2} from './changeRoom.js';

// import {} from './.js';
// import {} from './.js';

export const rooms = [
  { id: 1, beds: 2, price: 50, occupied: true },
  { id: 2, beds: 3, price: 75, occupied: false },
  { id: 3, beds: 2, price: 50, occupied: false },
  { id: 4, beds: 4, price: 100, occupied: true },
  { id: 5, beds: 5, price: 125, occupied: true },
  { id: 6, beds: 6, price: 150, occupied: true },
  { id: 7, beds: 4, price: 100, occupied: false },
];
export const clientsIn = [
  { dni: "447858F", name: "Adolfo", adults: 1, kids: 3, nights: 2, idRoom: 5 },
  { dni: "555858V", name: "Miguel", adults: 2, kids: 0, nights: 7, idRoom: 1 },
  { dni: "443458C", name: "Manuel", adults: 2, kids: 2, nights: 3, idRoom: 4 },
  { dni: "777858A", name: "João", adults: 2, kids: 3, nigths: 5, idRooms: 6 },
];
export const hotelServant=[
    { dni: "47382999D", name: "Nano", password: "123456"},
    { dni: "0000000000A", name: "XX", password: "123456"},
    { dni: "1111111111A", name: "YY", password: "123456"}
];
export const clientsOut=[];
export const store = { rooms, clientsIn, clientsOut};

const loginElementHTML=document.querySelector("#login-button");
loginElementHTML.addEventListener("click", event=>{
    event.preventDefault();
    document.querySelector("#login-button").classList.add("d-none");
    document.querySelector(".login-container").classList.remove("d-none");
});

const checkServant=document.querySelector("#login-form");
checkServant.addEventListener("submit", event=>{
    event.preventDefault();
    document.querySelector(".errors").innerHTML="";
    loginServant(); 
});

const checkInButton=document.querySelector("#checkIn-button");
checkInButton.addEventListener("click", (event)=>{
  event.preventDefault();
  document.querySelector(".checkIn-container").classList.remove("d-none");
  document.querySelector(".checkOut-container").classList.add("d-none");
  document.querySelector(".info-container").classList.add("d-none");
  document.querySelector(".changeRoom-container").classList.add("d-none");
});

const CheckInSubmit=document.querySelector("#checkIn-form");
CheckInSubmit.addEventListener("submit",event=>{
    event.preventDefault();
    document.querySelector(".errors").innerHTML="";
    checkIn(); 
});

// Boton de checkOut se despliega la info
const checkOutButton=document.querySelector("#checkOut-button");
checkOutButton.addEventListener("click", (event)=>{
  event.preventDefault();
  document.querySelector(".checkOut-container").classList.remove("d-none");
  document.querySelector(".checkIn-container").classList.add("d-none");
  document.querySelector(".info-container").classList.add("d-none");
  document.querySelector(".changeRoom-container").classList.add("d-none");
});

// Al hacer submit se imprime la factura y se añade a clientsOut
const checkOutSubmit=document.querySelector("#checkOut-form");
checkOutSubmit.addEventListener("submit", (event)=>{
  event.preventDefault();
  const dniOutInput=document.querySelector("#DNIOut").value;
  document.querySelector(".errors").innerHTML="";
  checkOut(dniOutInput);
});

// Hacer click para confirmar checkout
const confirmCheckOut=document.querySelector("#formCard");
confirmCheckOut.addEventListener("click", event=>{
  event.preventDefault();
  const dniOutInput=document.querySelector("#DNIOut").value;
  addToClientsOut(dniOutInput);
})

//click en confirmar checkOut me salga la info del hotel.
const infoClientsClikckOnconfirmCheckOut =document.querySelector(".clickToCheckOut")
infoClientsClikckOnconfirmCheckOut.addEventListener("click", event=>{
  event.preventDefault();
  document.querySelector(".errors").innerHTML="";
  document.querySelector(".tBodyRooms").innerHTML="";
  document.querySelector(".tBodyClientsIn").innerHTML="";
  document.querySelector(".tBodyClientsOut").innerHTML="";
  
  document.querySelector(".info-container").classList.remove("d-none");
  document.querySelector("#formCard").classList.add("d-none");
  document.querySelector("#formCard").classList.add("d-none");
  document.querySelector(".checkOut-container").classList.add("d-none");
  
  informationHotel()
})

//click info hotel
const infoClients =document.querySelector("#info-button")
infoClients.addEventListener("click", event=>{
  event.preventDefault();
  document.querySelector(".errors").innerHTML="";
  document.querySelector(".tBodyRooms").innerHTML="";
  document.querySelector(".tBodyClientsIn").innerHTML="";
  document.querySelector(".tBodyClientsOut").innerHTML="";
  
  document.querySelector(".info-container").classList.remove("d-none");
  document.querySelector("#formCard").classList.add("d-none");
  document.querySelector(".checkIn-container").classList.add("d-none");
  document.querySelector(".checkOut-container").classList.add("d-none");
  document.querySelector(".changeRoom-container").classList.add("d-none");
  
  informationHotel();
})

//boton change room
const buttonChange=document.querySelector("#changeRoom-button");
buttonChange.addEventListener("click", event=>{
  event.preventDefault();
  document.querySelector(".errors").innerHTML="";
  document.querySelector(".changeRoom-container").classList.remove("d-none");
  document.querySelector(".info-container").classList.add("d-none");
  document.querySelector(".checkIn-container").classList.add("d-none");
  document.querySelector(".checkOut-container").classList.add("d-none");
  
})

//submit changeRoom
const changeSubmit=document.querySelector("#changeRoom-form");
changeSubmit.addEventListener("submit",event=>{
  event.preventDefault();
  document.querySelector(".errors").innerHTML="";
  const dni=document.querySelector("#DNI-ChangeRoom").value;
  //console.log(dni);
  changeRoom(dni);

  document.querySelector(".info-container").classList.add("d-none");
  document.querySelector(".checkIn-container").classList.add("d-none");
  document.querySelector(".checkOut-container").classList.add("d-none");
})

// const selectRoomToChange=document.querySelector(".rowSelectors");
// selectRoomToChange.addEventListener("click", event=>{
//   event.preventDefault();
//   function changeRoom(){
//     const dni=document.querySelector("#DNI-ChangeRoom").value
//     console.log(dni);
//     const clientToChangeRoom=clientsIn.find((value)=>value.dni===dni)
//   }
//   changeRoom();
// })
