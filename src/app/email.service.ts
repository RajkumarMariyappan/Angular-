import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  getauthors(){
  return ["author1","author2","author3"];
  }
  constructor() { }
}
