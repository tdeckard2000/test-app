import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBoldBlue]'
})
export class BetterBoldBlueDirective implements OnInit {

  constructor(private eleRef:ElementRef, private render:Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.eleRef.nativeElement, 'color', 'blue');
    this.render.setStyle(this.eleRef.nativeElement, 'font-weight', 'bold');
  }
}
