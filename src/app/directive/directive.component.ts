import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
subject=[];
list=[1,2,3,4];
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

  constructor() { }

  ngOnInit(): void {
  }

}
