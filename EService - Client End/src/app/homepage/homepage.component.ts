import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  feed:any=[];
  newAdded=[];
  highRated=[];

  constructor(private getAllLink:GetAllService ,private router:Router,private active:ActivatedRoute) { }

  jumboForm = new FormGroup(
    {
      city :new FormControl(''),
      category : new FormControl('')
    }
  );

  newsOpt=false;
  
  ngOnInit() {
    this.getAllLink.justDial().subscribe(resp=>this.feed=resp.json());
    document.getElementById("nice").click();
    this.getAllLink.getNewlyAdded().subscribe(resp=>this.newAdded=resp.json());
    this.getAllLink.getHighRated().subscribe(resp=>this.highRated=resp.json());
  }

  
  submitJumboForm(){
    this.router.navigate( ['/combo/', {id: this.jumboForm.get('city').value, id2: this.jumboForm.get('category').value}]);
  }

  gotoadmin(){
    this.router.navigate(['/admin/dashboard']);
  }

  gotoservices(){
    this.router.navigate(['/services']);
  }

  gotocity(){
    this.router.navigate(['/services/city']);
  }

  gotocategory(){
    this.router.navigate(['/services/category']);
  }

  getNews(){
    this.newsOpt = true;
    this.getAllLink.justDial().subscribe(resp=>this.feed=resp.json());
    console.log(this.feed);
    console.log(this.feed.posts[0].thread.title);
  }

  gotoServiceman(param:string){
    this.router.navigate(['/serviceman/',{id:param}]);
  }

}
