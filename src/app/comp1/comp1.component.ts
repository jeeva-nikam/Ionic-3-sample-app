import { Component, OnInit  } from '@angular/core';
import {HeroService} from '../hero.service'; 

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})

// export interface varObject  {
//   color: string;
//   value: string;
// };

export class Comp1Component implements OnInit {
  userName: string = 'cdcdc';
  jsonData: any; 
  
  constructor(private _HeroService: HeroService) { 
    //this.userName =  'vfvfvf';//_HeroService.userData.userName;
  }

  ngOnInit() {
  }
  
  getSampleData(){
    //this.settingsService.mySettings.baseUrl + 
    var url = "https://api.myjson.com/bins/wvape";
    this._HeroService.getService(url)
        .subscribe(
        data => {
          this.jsonData = data;
           console.log(data);
        },
        error => {
           console.log('error is', error);
        });
  }

}


