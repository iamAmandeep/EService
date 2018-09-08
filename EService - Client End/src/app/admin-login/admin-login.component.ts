import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import{FormGroup} from '@angular/forms';
import{FormControl} from '@angular/forms';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  credential=[];
  constructor(public formService:AdminServiceService, private getAllLink:GetAllService) { }

  ngOnInit() {
  }

  user:string;
  pass:string;

      submitForm()
      {
        this.getAllLink.USER = this.user;
        this.getAllLink.PASS = this.pass;   
        this.getAllLink.checkAuth(this.user,this.pass).subscribe(resp=>this.credential=resp.json());
        console.log(this.user+" : "+this.pass);
      }

    }
   
  
  
  

