import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-combo-services',
  templateUrl: './combo-services.component.html',
  styleUrls: ['./combo-services.component.css']
})
export class ComboServicesComponent implements OnInit {

  constructor(private getAllLink:GetAllService, private router:Router,private active:ActivatedRoute) {
   }
  city;
  category;
  allService=[];

  ngOnInit() {
    this.city=this.active.snapshot.params['id'];
    this.category=this.active.snapshot.params['id2'];
    this.getAllLink.getByCombo(this.city,this.category).subscribe(resp=>this.allService=resp.json());
    console.log(this.allService);
  }
  gotoServiceman(param:string){
    this.router.navigate(['/serviceman/',{id:param}]);
  }
}
