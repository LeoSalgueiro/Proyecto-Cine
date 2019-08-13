export interface formSusCompleto{
DOC: number;
TIPO_DOC:string;
NOMBRE: string;
APELLIDO: string;
EMAIL: string;
FECHA_NAC: Date;
TELEFONO: string;
PERSONA_TIPO:string;
PROFESION: string;
ACOMPANIANTE: string;
ID_DF: number;
HORARIO: string;
SEXO: string;

}

export interface formPersona{
DOC: number;
TIPO_DOC:string;
NOMBRE: string;
APELLIDO: string;
EMAIL: string;
FECHA_NAC: Date;
TELEFONO: string;
PERSONA_TIPO:string;
}

export interface formSuscriptor{
EMAIL: string;
PROFESION: string;
ACOMPANIANTE: string;
ID_DF: number;
HORARIO: string;
SEXO: string;

}


export class ExisteSuscriptor {
private resultado: number;
constructor(resultado: number){
    this.resultado=resultado;
}

getResultado():number{return this.resultado;}

}


export class ExistePersona {
    private resultado: number;
    constructor(resultado: number){
        this.resultado=resultado;
    }
    getResultado():number{return this.resultado;}
    
    }