
export class Consulta{
    private id:number;
    private _email:string;
    private motivo: string;
    private detalle: string;
    private nombreCiudad: string;
    constructor(id: number=0,email: string='',motivo: string='',detalle: string=''){
        this.id=id;
        this.email=email;
        this.motivo=motivo;
        this.detalle=detalle;
    }
    public setId(id:number){
      this.id=id;
    }
    set email(email:string){
      this._email=email;
      if(email=='ina@h.h'){
      alert("lo setie: ");
      }
    }
    public setMotivo(motivo:string){
      this.motivo=motivo;
    }
    public setDetalle(detalle:string){
      this.detalle=detalle;
    }
    public getId():number{
        return this.id;
    }
    get email():string{
        return this._email;
    }
    public getDetalle():string{
        return this.detalle;
    }
    public getMotivo():string{
        return this.motivo;
    }
    public save(){//guardo el objeto en la base de datos
        console.log("se creo la consulta!. Motivo= "+this.motivo+"| Consulta= "+this.detalle);
    }
    
    
}