import { Component, OnInit } from '@angular/core';

import { EmailService } from '../email.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title="Welcome to first Angular App";
  authors;
  imagess ="favicon.ico";
  hai=false;
  colspan= 2;
isactive=true;
isactiv=true;


  constructor(obj:EmailService) { 
  this.authors= obj.getauthors();
  }
  name:any="rajkumar";
  input(){
    console.log("enter is pressed...",this.name);
  }
  temp(email:any){
    console.log(email.value);

  }
divclick(){
  console.log("div button is clicked...");
}
  onclickbutton($event:any){
    $event.stopPropagation();
    console.log("button is clicked..",$event);
  }

hey ={
  nme:"rajkumar",
  price:34.55668,
  int:3456788,
  datere:new Date(2021,1,19)
}
  
  ngOnInit(): void {
   
  }

}
