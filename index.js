'use strict'

//declarar y asignar variable i.

let i = 0;
//declarar y pedir que ingrese el nuemro de vueltas en t.

let t = Number(prompt("Ingrese el numero de vueltas"));

//usar while para hacer los bucles 

while (i < t) {
    alert('Vuelta No: ' + Number(i)+1);
    i++;//tambien sirve: i=i+1
}
