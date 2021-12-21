import { AbstractControl, ValidationErrors } from "@angular/forms";


export class customvalidator{
  static customval(control:AbstractControl) : ValidationErrors |null {
        if((control.value as string).indexOf(' ')>=0 )
        {
        return {'custom':true};
        }
       return null;
        
    }

    static unique(control:AbstractControl) : Promise<ValidationErrors |null>{
       return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(control.value === 'raj')
            resolve({notsame: true});
            else
            resolve(null);
        }, 2000);
       });
       
        
        
    }
}