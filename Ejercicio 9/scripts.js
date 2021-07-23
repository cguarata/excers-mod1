"use strict";
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;


const intervalsTime = setInterval(() => timing(), 1000);
function timing() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    if (hours === 24) {
        days++;
        hours = 0;
    }
const timer = `Desde la ejecución han pasado ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
    if (seconds % 5 === 0) {
        console.log(timer);
    }
}