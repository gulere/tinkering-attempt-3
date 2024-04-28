//eces date & clock program
//tinkering #3


//current date

const dateToday = document.getElementById("date");
    
const today = new Date();
const day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
const month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
 const year = today.getFullYear();

dateToday.textContent = `${day}/${month}/${year}`;

//current time

updateClock();
setInterval(updateClock, 1000);

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}