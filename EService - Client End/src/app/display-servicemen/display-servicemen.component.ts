import { Component, OnInit } from '@angular/core';
import { GetAllService } from '../services/get-all.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-servicemen',
  templateUrl: './display-servicemen.component.html',
  styleUrls: ['./display-servicemen.component.css']
})
export class DisplayServicemenComponent implements OnInit {

  constructor(private getAllLink:GetAllService,private router:Router,private active:ActivatedRoute) { }

  param;
  serviceman=[];

  ngOnInit() {
    this.param=this.active.snapshot.params['id'];
    console.log(this.param);
    this.getAllLink.searchServiceman(this.param).subscribe(resp=>this.serviceman=resp.json());
    console.log(this.serviceman);
  }

  show(){
    this.param=this.active.snapshot.params['id'];
    console.log(this.param);
    this.getAllLink.searchServiceman(this.param).subscribe(resp=>this.serviceman=resp.json());
    console.log(this.serviceman);
  }

}
