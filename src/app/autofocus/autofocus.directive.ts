import { Directive, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[ngAutoFocus]'
})
export class AutofocusDirective {

  constructor(el: ElementRef) {
    setTimeout(() => {
      $(el.nativeElement).focus();
    }, 100);
  }

}
