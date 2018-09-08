import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicemenService } from '../services/servicemen.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-servicemen',
  templateUrl: './add-servicemen.component.html',
  styleUrls: ['./add-servicemen.component.css']
})
export class AddServicemenComponent implements OnInit {

  constructor(public formService:ServicemenService, private router:Router,private active:ActivatedRoute) { }

  ngOnInit() {
  }
  profileForm = new FormGroup(
    {
      name:new FormControl(''),
      category : new FormControl(''), 
      mobile:new FormControl(''),
      email:new FormControl(''),
      city : new FormControl(''), 
      experience:new FormControl(''),
      rating : new FormControl(''), 
      rate : new FormControl('')
      })

      allService:any;

      submitForm()
      {
        this.formService.Add(this.profileForm.value).subscribe(resp=>this.allService=resp.json());
        console.log(this.profileForm.value);
      }

      gotoDashboard(){
        this.router.navigate(['admin/dashboard']);
      }

}
