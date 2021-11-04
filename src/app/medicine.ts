import { Category } from "./category";

export class Medicine {
    id?:number;
    name?:string;
    price?:number;
    description?:string;
    image?:string;
    available?:boolean;
    seller?:string;
    cid?:Category;
    constructor(id?:number,name?:string,price?:number,description?:string,
        image?:string,available?:boolean,seller?:string, cid?:Category){
       this.id=id; this.name=name;
       this.price=price;
       this.description=description;this.available=available;
        this.image=image;this.seller=seller; this.cid=cid;
    }
}
