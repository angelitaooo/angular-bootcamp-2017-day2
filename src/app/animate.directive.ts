import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {

  constructor(public elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.transition = 'all .2s ease';
    this.elementRef.nativeElement.style.transform = 'scale(1.5)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.transition = 'all .2s ease';
    this.elementRef.nativeElement.style.transform = '';
  }
}
