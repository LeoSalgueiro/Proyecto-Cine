
export class Consulta{
    private id:number;
    private email:string;
    private motivo: number;
    private detalle: string;
    private nombreCiudad: string;
    constructor(id: number,email: string,motivo: number,detalle: string){
        this.id=id;
        this.email=email;
        this.motivo=motivo;
        this.detalle=detalle;
    }
    public setId(id:number){
      this.id=id;
    }
    public setEmail(email:string){
      this.email=email;
    }
    public setMotivo(motivo:number){
      this.motivo=motivo;
    }
    public setDetalle(detalle:string){
      this.detalle=detalle;
    }
    public getId():number{
        return this.id;
    }
    public getEmail():string{
        return this.email;
    }
    public getDetalle():string{
        return this.detalle;
    }
    public getMotivo():number{
        return this.motivo;
    }
    public save(){//guardo el objeto en la base de datos
        console.log("se creo la consulta!. Motivo= "+this.motivo+"| Consulta= "+this.detalle);
    }
    
    
}