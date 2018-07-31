import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { strictEqual } from 'assert';

export interface varObject  {
  userName: string;
  pass: string;
  marks: Array<number>;
};

//export interface varArray [ ccd: string, ];
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})

export class Comp2Component implements OnInit, AfterViewInit {
  localUserName: string;
  @Input('userName') userName1: string;
  myData:varObject = {userName: '', pass: '', marks: [1,2,3,4]};
    
  
  constructor() {
    //console.log(this.dvdfv.peoperty1);
  }

  ngOnInit() {
   
    this.localUserName =  this.userName1;
  }
 
  ngAfterViewInit() {
    // this.userName =  this.userName1;
   }

  
  

}
