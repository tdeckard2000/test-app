import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {

  constructor( private eleRef:ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') someMethod(){
    this.render.setStyle(this.eleRef.nativeElement, 'color', 'blue');
    this.render.setStyle(this.eleRef.nativeElement, 'font-weight', 'bold');
  }

  @HostListener('mouseleave') someOtherMethod(){
    this.render.setStyle(this.eleRef.nativeElement, 'color', 'black');
    this.render.setStyle(this.eleRef.nativeElement, 'font-weight', 'unset');
  }

}
