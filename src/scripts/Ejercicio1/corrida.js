export class Corrida{
    constructor(numeroCorrida, empresa, descripcionEmpresa, tienePromocion){
        this._numeroCorrida = numeroCorrida;
        this._empresa = empresa;
        this._descripcionEmpresa = descripcionEmpresa;
        this._tienePromocion = tienePromocion;
    }

    /* numero Corrida */
    set numeroCorrida(numCorr){
        this._numeroCorrida = numCorr;
    }

    get numeroCorrida(){
        return this._numeroCorrida;
    }

    /* empresa */
    set empresa(empresa){
        this._empresa = empresa;
    }

    get empresa(){
        return this._empresa;
    }

    /* descripcionEmpresa */
    set descripcionEmpresa(descEmpresa){
        this._descripcionEmpresa = descEmpresa;
    }

    get descripcionEmpresa(){
        return this._descripcionEmpresa;
    }

    /* tienePromocion */
    set tienePromocion(tienePromo){
        this._tienePromocion = tienePromo;
    }

    get tienePromocion(){
        return this._tienePromocion;
    }
}