import { directory, users } from './constsEjercicio2';

export interface IUser{
    _id: string;
    _name: string;
    _dateBirth: string;
    _yearsOld: number;

    foo(correo: string): User;
}


export class User {
    private _id: string = '';
    private _name: string = '';
    private _dateBirth: string = '';
    private _yearsOld: number = 0;


    constructor(id: string, name: string, dateBirth: string, yearsOld: number){
        this._id = id;
        this._name = name;
        this._dateBirth = dateBirth;
        this._yearsOld = yearsOld;
    }

    /* Id */
    set id(id: string){
        this._id = id;
    }

    get id(): string{
        return this._id;
    }

    /* name */
    set name(name: string){
        this._name = name;
    }

    get name(): string{
        return this._name;
    }


    /* dateBirth */
    set dateBirth(dateBirth: string){
        this._dateBirth = dateBirth;
    }

    get dateBirth(): string{
        return this._dateBirth;
    }

    /* yearsOld */
    set yearsOld(yearsOld: number){
        this._yearsOld = yearsOld;
    }

    get yearsOld(): number{
        return this._yearsOld;
    }



}


export function calcularEdad(fecha: string): number {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);




    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}


export function foo (correo:string) : User{
    let usuario = directory.filter(user => user.email === correo);
    let idUser = usuario[0].id;

    let filterById = users.filter(user => user.id === idUser);
    let fechaNacimiento = filterById[0].dayBirth + '/' + filterById[0].monthBirth + '/' + filterById[0].yearBirth;
    let usuarioElegido: User = new User(filterById[0].id, 
        filterById[0].name + filterById[0].lastName, 
        fechaNacimiento, calcularEdad(fechaNacimiento));

    return usuarioElegido;
}


