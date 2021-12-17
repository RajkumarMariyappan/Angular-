import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
   a:any;   b:any;
log(x:any){
  this.a=x;
  console.log(x);
}
log1(y:any){
  this.b=y;
  console.log(y);
}
submit(f:any){
  console.log(f);
}

dropobj=[
  {id:1,name:"email"},
  {id:2,name:"phone"}
]

radobj=[
  {id:1,name:"email"},
  {id:2,name:"phone"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
