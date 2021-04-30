/* Ejercicio 1 */
/*
Crear una funcion que reciba como parametros empresa y descripcion de servicio. 

* La funcion debe buscar en la constante corridasWeb las corridas que coincidan con los parametros enviados en la función.

* El parametro empresa debe ser opcional y en caso de no enviarlo asignar como default el valor "AEF"

* La funcion debe regresar un arreglo de objetos de tipo corrida con los siguientes atributos.
 - numeroCorrida. String
 - descripcionServicio. String
 - empresa. String
 - descripcionEmpresa: String
 - tienePromociÃ³n. Boolean. DeberÃ¡ ir en true en caso de que una de las corridas web tenga lista de descuetos "listaDescuentos"
 
* En caso de no encontrar corridas, regresar un error con el mensaje "No hay corridas disponibles"

*/

import { corridasWeb } from './constsEjercicio1';



function todoPoderoso(descServicio, empresa = "AEF") {
    console.log(`Buscando empresa: ${empresa} y descripcionServicio: ${descServicio}`);
    
    /* Utilizando filter */
    let filtro = corridasWeb.filter(corrida => corrida.empresa === empresa && corrida.descripcionServicio === descServicio );
    

    /* Utilizando forEach 
    let filtro = [];
    corridasWeb.forEach(element => {
        if(element.empresa === empresa && element.descripcionServicio === descServicio){
            filtro.push(element);
        }
    });
    */

    console.log(`Elementos encontrados: ${filtro.length}`);

    let arrayFinal = [];
    
    filtro.forEach(element => {
        let promo = element.hasOwnProperty('listaDescuentos');
        
        let obj = {
            'numeroCorrida': element.numeroCorrida,
            'empresa': element.empresa,
            'descripcionEmpresa': element.descripcionEmpresa,
            'tienePromocion': promo
        };

        arrayFinal.push(obj);
    });

    
    console.log(arrayFinal.length);
    return arrayFinal; 
}

let solucion = todoPoderoso("PRIMERA SELECT","TCH");
console.log(solucion.length);
console.log(solucion);


/* Con clases */
/* Ejercicio 1 */
/*
Crear una funcion que reciba como parametros empresa y descripcion de servicio. 

* La funcion debe buscar en la constante corridasWeb las corridas que coincidan con los parametros enviados en la función.

* El parametro empresa debe ser opcional y en caso de no enviarlo asignar como default el valor "AEF"

* La funcion debe regresar un arreglo de objetos de tipo corrida con los siguientes atributos.
 - numeroCorrida. String
 - descripcionServicio. String
 - empresa. String
 - descripcionEmpresa: String
 - tienePromociÃ³n. Boolean. DeberÃ¡ ir en true en caso de que una de las corridas web tenga lista de descuetos "listaDescuentos"
 
* En caso de no encontrar corridas, regresar un error con el mensaje "No hay corridas disponibles"

*/
/*
import { corridasWeb } from './constsEjercicio1';
import { Corrida } from './corrida';


function todoPoderoso(descServicio, empresa = "AEF") {
    console.log(`Buscando empresa: ${empresa} y descripcionServicio: ${descServicio}`);
    
    /* Utilizando filter */
    //let filtro = corridasWeb.filter(corrida => corrida.empresa === empresa && corrida.descripcionServicio === descServicio );
    

    /* Utilizando forEach 
    let filtro = [];
    corridasWeb.forEach(element => {
        if(element.empresa === empresa && element.descripcionServicio === descServicio){
            filtro.push(element);
        }
    });
    */
    /*
    console.log(`Elementos encontrados: ${filtro.length}`);

    let arrayFinal = [];
    
    filtro.forEach(element => {
        let promo = element.hasOwnProperty('listaDescuentos');

        let corrida = new Corrida();

        corrida.numeroCorrida = element.numeroCorrida;
        corrida.empresa = element.empresa;
        corrida.descripcionServicio = element.descripcionEmpresa;
        corrida.tienePromocion = promo;

        arrayFinal.push(corrida);
    });

    
    console.log(arrayFinal.length);
    return arrayFinal; 
}

let solucion = todoPoderoso("PRIMERA SELECT","TCH");
console.log(solucion.length);
console.log(solucion);

*/