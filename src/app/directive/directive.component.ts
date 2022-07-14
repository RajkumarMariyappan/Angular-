import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
subject=[];
list=[10,20,30,40];
view='map';

listobj=[{
  first:"raj",
  last:"kumar",
  age:23
},
{
  first:"raaj",
  last:"kumaar",
  age:24
},
{
  first:"raja",
  last:"kumara",
  age:25
}]

login=[{ lfirst:"raj",
llast:"kumarr",
lage:23
},
{ lfirst:"raju",
llast:"kumarru",
lage: 13
}
]

Onadd(){
  this.login.push({ lfirst:"raaj",llast:'kumaar',lage:23});
}
Onremove(log: { lfirst: string; llast: string; lage: number; }){
  let ins = this.login.indexOf(log);
  this.login.splice(ins,1);
}


  constructor() { }

  ngOnInit(): void {
  }

}
