import { Component, OnInit } from '@angular/core';
import { GetAllService } from '../services/get-all.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {

  constructor(private getAllLink:GetAllService,private router:Router,private active:ActivatedRoute) { }

  allService=[];

  ngOnInit() {
    this.getAllLink.getAllServices().subscribe(resp=>this.allService=resp.json());
    console.log(this.allService);
  }

  goService(param:string){
    this.router.navigate(['/serviceman/',{id:param}]);
  }


}
