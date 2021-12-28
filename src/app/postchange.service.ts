import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { catchError,throwError } from 'rxjs';
import {  Observable } from 'rxjs';
@Injectable()
export class PostchangeService {
  url='https://jsonplaceholder.typicode.com/posts';
 
 
  
  constructor(private http : HttpClient) { }
  handleError(error: Response){
    return throwError(()=>error);
   }
getpostchanges(){
  return this.http.get(this.url);
}
createpostchanges(posttit: { title: string; }){
  return this.http.post(this.url,posttit);
}
updatepostchanges(dat:any){
  return this.http.patch(this.url+'/'+dat.id,JSON.stringify({isRead:true}));
}
deletepostchanges(dat:any):Observable<any>{
  return this.http.delete(this.url+'/'+dat.id).pipe(catchError(this.handleError));
 
}


}

