import { Component, OnInit } from '@angular/core';
import { GetAllService } from '../services/get-all.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  ans:any;
  allService=[];
  constructor(private getAllLink:GetAllService,private router:Router,private active:ActivatedRoute) { }

  getAServices(){
    this.getAllLink.getAllServices().subscribe(resp=>this.allService=resp.json());
    console.log(this.allService);
  }

  gotoAdd(){
    this.router.navigate(['/admin/add']);
  }

  gotoEdit(param:string){
    this.router.navigate(['/admin/edit',{id:param}]);
  }

  gotoDelete(param:string){
    this.getAllLink.deleteService(param).subscribe(resp=>this.ans=resp.json());
    document.getElementById(param).style.display="none";
  }

  ngOnInit() {
  }

}
