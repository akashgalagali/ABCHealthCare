import { Medicine } from "./medicine";
import { User } from "./user";

export class Order {
    id?:number;
    med?:Medicine;
    user?:User;
    ordered?:boolean;
    constructor(id?:number,med?:Medicine,user?:User,ordered?:boolean){
       this.id=id;this.med=med;
       this.user=user;this.ordered=ordered;
    }

}
