import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect';
}

const button0 = document.getElementById('Zero');
const button1 = document.getElementById('One');
const button2 = document.getElementById('Two');
const button3 = document.getElementById('Three');
const button4 = document.getElementById('Fourth');
const button5 = document.getElementById('Five');
const button6 = document.getElementById('Six');
const button7 = document.getElementById('Seven');
const button8 = document.getElementById('Eight');
const button9 = document.getElementById('Nine');

const buttonSum = document.getElementById('Sum');
const buttonRest = document.getElementById('Rest');
const buttonMult = document.getElementById('Mult');
const buttonDiv = document.getElementById('Div');

const buttonDEL = document.getElementById('DEL');
const buttonAC = document.getElementById('AC');
const buttonAns = document.getElementById('Ans');

const buttonSin = document.getElementById('Sin');
const buttonCos = document.getElementById('Cos');
const buttonTan = document.getElementById('Tan');

const buttonIgual = document.getElementById('Igual');
const buttonPotencia = document.getElementById('Potencia');
const buttonRaiz = document.getElementById('Raiz');
const buttonPi = document.getElementById('Pi');
const buttonP = document.getElementById('Point');
let contenedor

button1?.addEventListener('click', function handleClick(event) {

    let myContainer = <HTMLElement>document.getElementById('tabla');
    contenedor = myContainer.innerHTML + "1"
    myContainer.innerHTML = contenedor;
  
});
button2?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "2"
  myContainer.innerHTML = contenedor;

});
button3?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "3"
  myContainer.innerHTML = contenedor;

});
button4?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "4"
  myContainer.innerHTML = contenedor;

});
button5?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "5"
  myContainer.innerHTML = contenedor;

});
button6?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "6"
  myContainer.innerHTML = contenedor;

});
button7?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "7"
  myContainer.innerHTML = contenedor;

});
button8?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "8"
  myContainer.innerHTML = contenedor;

});
button9?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "9"
  myContainer.innerHTML = contenedor;

});
button0?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "0"
  myContainer.innerHTML = contenedor;

});
buttonP?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "."
  myContainer.innerHTML = contenedor;

});

buttonSum?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " + "
  myContainer.innerHTML = contenedor;

});
buttonRest?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " - "
  myContainer.innerHTML = contenedor;

});
buttonMult?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " * "
  myContainer.innerHTML = contenedor;

});

buttonDiv?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " / "
  myContainer.innerHTML = contenedor;

});

buttonIgual?.addEventListener('click', function handleClick(event) {
  let operacion
  let operacion2
  
  operacion = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
  operacion2 = operacion.toString()
  operacion = eval(operacion2)
  operacion2 = operacion.toString()
  
  let myContainer = <HTMLElement>document.getElementById('tabla');
  myContainer.innerHTML = operacion2;

});