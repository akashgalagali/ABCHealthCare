export class Cart {
    id?:number;
    med?:string;
    cust?:number;
    ordered?:boolean;
    constructor(id?:number,med?:string,user?:number,ordered?:boolean){
       this.id=id;this.med=med;
       this.cust=user;this.ordered=ordered;
    }
}
