import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputCustomdirective]'
})
export class InputCustomdirectiveDirective {

  constructor() { }

  @HostListener('focus') ONfocus(){
    console.log("focus...");
    
  }
}
