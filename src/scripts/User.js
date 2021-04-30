import { directory, users } from './constsEjercicio2';
export class User {
    constructor(id, name, dateBirth, yearsOld) {
        this._id = '';
        this._name = '';
        this._dateBirth = '';
        this._yearsOld = 0;
        this._id = id;
        this._name = name;
        this._dateBirth = dateBirth;
        this._yearsOld = yearsOld;
    }
    /* Id */
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    /* name */
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    /* dateBirth */
    set dateBirth(dateBirth) {
        this._dateBirth = dateBirth;
    }
    get dateBirth() {
        return this._dateBirth;
    }
    /* yearsOld */
    set yearsOld(yearsOld) {
        this._yearsOld = yearsOld;
    }
    get yearsOld() {
        return this._yearsOld;
    }
}
export function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}
export function foo(correo) {
    let usuario = directory.filter(user => user.email === correo);
    let idUser = usuario[0].id;
    let filterById = users.filter(user => user.id === idUser);
    let fechaNacimiento = filterById[0].dayBirth + '/' + filterById[0].monthBirth + '/' + filterById[0].yearBirth;
    let usuarioElegido = new User(filterById[0].id, filterById[0].name + filterById[0].lastName, fechaNacimiento, calcularEdad(fechaNacimiento));
    return usuarioElegido;
}
