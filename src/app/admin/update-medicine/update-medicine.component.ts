import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {
medicine:Medicine= new Medicine();
msg:string="";
sub:any;
id?:number;
email:string='';
  constructor(private _ms: MedicineService, private route: ActivatedRoute, private _router:Router,private _as:AccountService) {
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    this.email=_as.email;
   }
  updateMedicineViaService(){
    this._ms.updateMedicineViaApi(this.medicine).subscribe(result=> this.msg = "updated")
    this._router.navigate(["./adminMedicines"])
  }
  getMedicineByIdViaService(){
    this._ms.getMedicineByIdViaApi(Number(this.id)).subscribe(result=>this.medicine =result);
  }
  ngOnInit(): void {
  
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.id=params["id"];
    });
    this.getMedicineByIdViaService();
    }
    logout(){
      this._as.loggedIn=false;
      this._router.navigate(['']);
    }
}
