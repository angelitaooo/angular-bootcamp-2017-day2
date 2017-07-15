import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(public elementRef: ElementRef) { }

  @HostListener('click') onClick() {
    this.elementRef.nativeElement.style.display = 'none';
  }
}
