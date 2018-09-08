import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  constructor(private getAllLink:GetAllService, private router:Router, private active:ActivatedRoute) { }

  ngOnInit() {
  }
  allService=[];
  category:any;

  goService(param:string){
    this.router.navigate(['/serviceman/',{id:param}]);
  }

  showServices(){
    console.log(this.category);
    this.getAllLink.getByCategory(this.category).subscribe(resp=>this.allService=resp.json());
    if(this.allService!=null){
      document.getElementById('countDiv').style.display="none";
      document.getElementById("hiddenCity").style.display="block";
      }else{
        document.getElementById("hiddenCity").style.display="none";
        document.getElementById('countDiv').style.visibility="visible";
      }
  }
}
