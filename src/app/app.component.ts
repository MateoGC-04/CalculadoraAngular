import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect';
}
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

const buttonCorI = document.getElementById('CorI');
const buttonCorD = document.getElementById('CorD');
const buttonDegre = document.getElementById('Grados');

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
const buttonComa = document.getElementById('Coma');

const buttonSin = document.getElementById('Sin');
const buttonCos = document.getElementById('Cos');
const buttonTan = document.getElementById('Tan');

const buttonIgual = document.getElementById('Igual');
const buttonPotencia = document.getElementById('Potencia');
const buttonRaiz = document.getElementById('Raiz');
const buttonPi = document.getElementById('Pi');
const buttonP = document.getElementById('Point');
let contenedor;

buttonDEL?.addEventListener('click', function handleClick(event) {
  let str;
  let myContainer = <HTMLElement>document.getElementById('tabla');
  str = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML);
  contenedor = str.toString();
  contenedor = contenedor.slice(0, -1);
  myContainer.innerHTML = contenedor;

});

buttonAC?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = ""
  myContainer.innerHTML = contenedor;

});

buttonDegre?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "deg"
  myContainer.innerHTML = contenedor;

});

buttonCorI?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "("
  myContainer.innerHTML = contenedor;

});

buttonCorD?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + ")"
  myContainer.innerHTML = contenedor;

});

buttonComa?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + ","
  myContainer.innerHTML = contenedor;

});

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

buttonCos?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " cos("
  myContainer.innerHTML = contenedor;

});

buttonSin?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " sin("
  myContainer.innerHTML = contenedor;

});

buttonTan?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " tan("
  myContainer.innerHTML = contenedor;

});

buttonRaiz?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " sqrt("
  myContainer.innerHTML = contenedor;

});

buttonPotencia?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + " pow("
  myContainer.innerHTML = contenedor;

});

buttonPi?.addEventListener('click', function handleClick(event) {

  let myContainer = <HTMLElement>document.getElementById('tabla');
  contenedor = myContainer.innerHTML + "pi"
  myContainer.innerHTML = contenedor;

});

buttonIgual?.addEventListener('click', function handleClick(event) {
  let operacion
  let operacion2
  
  operacion = (<HTMLElement><unknown>document.getElementById('tabla')?.innerHTML)
  operacion2 = operacion.toString()
  operacion = math.parse(operacion2)
  operacion2 = operacion.evaluate()
  operacion = operacion2.toString()
  
  let myContainer = <HTMLElement>document.getElementById('tabla');
  myContainer.innerHTML = operacion;

});