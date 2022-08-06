import { Directive, forwardRef, Attribute, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({ selector: '[customFocus]' })
// Directive class
export class FocusInputDirective implements AfterViewInit {

      constructor(
        private elementRef: ElementRef
    ){}
  
    ngAfterViewInit(){
        Promise.resolve().then(() =>this.elementRef.nativeElement.focus());
    }
}