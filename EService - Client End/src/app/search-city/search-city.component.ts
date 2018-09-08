import { Component, OnInit } from '@angular/core';
import { GetAllService } from '../services/get-all.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  constructor(private getAllLink:GetAllService, private router:Router, private active:ActivatedRoute) { }

  ngOnInit() {
  }

  allService=null;
  city:any;

  goService(param:string){
    this.router.navigate(['/serviceman/',{id:param}]);
  }

  showServices(){
    console.log(this.city);
    this.getAllLink.getByCity(this.city).subscribe(resp=>this.allService=resp.json());
    if(this.allService!=null){
    document.getElementById('countDiv').style.display="none";
    document.getElementById("hiddenCity").style.display="block";
    }else{
      document.getElementById("hiddenCity").style.display="none";
      document.getElementById('countDiv').style.visibility="visible";
    }
    
  }

}
