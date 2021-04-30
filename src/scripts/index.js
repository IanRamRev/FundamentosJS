//tsc src/scripts/indexedDB.ts -w
/*

let bandera: boolean = true;


if(bandera === true){
    console.log('Verdadero nuevo');
}
else{
    console.log('False nuevo');
}

let x: number;

*/
/* INTERFACES
// Fuerzan a cierta configuración (que cumplan un contrato definido)
interface Icalculator{
    suma(num1: number, num2: number): number | string;
    resta(num1: number, num2: number): number;
}
*/
/* CLASES
class Calculator implements Icalculator{

    constructor(){

    }

    // Podemos retornar dos tipos de datos diferentes
    suma(num1: number, num2: number): number | string{
        return num1 + num2;
    }

    resta(num1: number, num2: number): number{
        return num1 - num2;
    }
}

const suma = new Calculator()
console.log('La suma de 4 + 3 es: ', suma.suma(3,4));
console.log('La resta de 4 - 3 es: ', suma.suma(4,3));

*/
/* INFERENCIA DE TIPOS
// Typescript infiere el tipo de dato al asignar un valor
let array = [1,2,3,4, 'holaMundo'];

// Error, solo acepta number y string
//array.push(true)
*/
/* FUNCIONES ASÍNCRONAS */
// Las funciones asíncronas esperan a que se complete la petición para posteriormente seguir el hilo de ejecución
// node-fetch simula la petición a una API,
/*
{
    const fetch = require('node-fetch');

    async function getNombre(username:string) {
        const url = `https://api.github.com/users/${username}`;
        const respuesta = await fetch(url);
        const json = await respuesta.json();
        console.log(json);
        
    }

    async function otraFuncion() {
        console.log('1 -> Inicio');
        await getNombre('rj4forever');
        console.log('2 -> Fin');
    }

    console.log('Fin otra vez');
    
    otraFuncion();
}
*/
/*
import { ClienteInterface, ClienteObjectInterface } from "./interface";


class Cliente implements ClienteInterface{
    creado: Date;

    constructor(public nombre: string, public direccion: string) {
        this.creado = new Date(Date.now());
    }
}



let clienteObjeto: ClienteObjectInterface = {
    nombre: 'Ian Ramírez Revilla',
    direccion: 'Emiliano Zapata #4',
    creado: new Date()
};


console.log(clienteObjeto);


console.log('Funciona Bien');
*/
/* Ejercicio 2 */
/*Crear una clase llamada User que implemente una interface llamada IUser con una funcion que devuelva un objeto usuario.

La funcion debe tener las siguientes consideraciones.
* Recibir como parametro un correo.
* Buscar en la constante directory el correo y devolver el id.
* Con el id que se haya obtenido de la constante directory. Buscar en la constante users el usurio con ese mismo id.
* El objeto user debe contener los siguienres atributos
- id
- name. name + lastName
- dateBirth. en formato dd/mm/yyyy
- yearsOld. Calcular a partir de la fecha, del día, del mes y del año de nacimiento
*/
import { foo } from './User';
let resultado = foo("francisco.hernandez@axity.com");
console.log(resultado);
console.log('Funcionando al 100');
