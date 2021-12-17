import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
gen=[{
  id:1,name:"male"
},
{id :2, name:"female"}
]

media=[{
  id:1,name:"facebook"
},
{id :2, name:"twitter"},
{id :3, name:"linkedln"}
]
submit(f:any){
  console.log(f);
}

}
