import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicemenService } from '../services/servicemen.service';
import { RouteReuseStrategy, Router, ActivatedRoute } from '@angular/router';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-edit-servicemen',
  templateUrl: './edit-servicemen.component.html',
  styleUrls: ['./edit-servicemen.component.css']
})
export class EditServicemenComponent implements OnInit {

  constructor(private getAllLink:GetAllService, public formService:ServicemenService, private router:Router,private active:ActivatedRoute) { 
    
  }
  
  param:string;
  serviceman=[];
  ngname="";
  ngcategory="";
  ngmobile="";
  ngemail="";
  ngcity="";
  ngexperrience="";
  ngrating="";
  ngrate="";
  visibility=true;
  ans:any;

  ngOnInit() {
    this.param=this.active.snapshot.params['id'];
    this.getAllLink.getServiceman(this.param).subscribe(resp=>this.serviceman=resp.json());
    document.getElementById("btn-modal").click();
  }

  profileForm = new FormGroup(
    {
      name:new FormControl(''),
      category : new FormControl(''), 
      mobile:new FormControl(''),
      email : new FormControl(''), 
      city : new FormControl(''), 
      experience:new FormControl(''),
      rating : new FormControl(''),
      rate : new FormControl('') 
      })

      submitForm()
      {
        console.log(this.ngname);
        this.param=this.active.snapshot.params['id'];
        this.getAllLink.editService(this.profileForm.value,this.param).subscribe(resp=>this.ans=resp.json());
      }

      gotoDashboard(){
        this.router.navigate(['/admin/dashboard']);
      }

      getData(){
        this.ngname = this.serviceman[0].name;
        this.ngcategory=this.serviceman[0].category;
        this.ngmobile=this.serviceman[0].mobile;
        this.ngemail=this.serviceman[0].email;
        this.ngcity=this.serviceman[0].city;
        this.ngexperrience=this.serviceman[0].experience;
        this.ngrating=this.serviceman[0].rating;
        this.ngrate=this.serviceman[0].rate;
      }

}
