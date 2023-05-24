import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-angular';
}

let num1
let num2
let respt
let resptString 
let resptContainer = <HTMLElement>document.getElementById('respuesta');
const button1 = document.getElementById('suma')
const button2 = document.getElementById('resta')
const button3 = document.getElementById('mult')
const button4 = document.getElementById('div')

button1?.addEventListener("click",function handleclick(event)
{
num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
respt = (num1 + num2);
resptString = respt.toString();
resptContainer.innerHTML = resptString;
});

button2?.addEventListener("click",function handleclick(event)
{
num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
respt = (num1 - num2);
resptString = respt.toString();
resptContainer.innerHTML = resptString;
});

button3?.addEventListener("click",function handleclick(event)
{
num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
respt = (num1 * num2);
resptString = respt.toString();
resptContainer.innerHTML = resptString;
});

button4?.addEventListener("click",function handleclick(event)
{
num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
if (num2 == 0) 
{
  resptString = "Math error";
} 
else 
{
  respt = (num1 / num2);
  resptString = respt.toString();
}
resptContainer.innerHTML = resptString;
});