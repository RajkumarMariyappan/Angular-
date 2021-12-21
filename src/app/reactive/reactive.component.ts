import { Component, OnInit } from '@angular/core';
import {  FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { customvalidator } from './Custom.Validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  
  constructor() { }

form = new FormGroup({
  use: new FormControl('',[Validators.required,customvalidator.customval],customvalidator.unique),
  pas: new FormControl('',[Validators.required,Validators.minLength(5)]),
  hobbies: new FormArray([]),
});

get usename(){
  return this.form.get('use')}
get passs(){
  return this.form.get('pas')
}

submiton(){
  console.log(this.form);
  this.form.setErrors({
    invalidlog :true
  })
  
}

addhobbies(){
  const control=new FormControl('',[Validators.required]);
  (this.form.get('hobbies') as FormArray).push(control); 
}
getHobbies() {
  return (this.form.get('hobbies') as FormArray).controls;
}
  ngOnInit(): void {
  }


}
