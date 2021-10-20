import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostBindingBoldBlue]'
})
export class HostBindingBoldBlueDirective {

  @Input() setColor:string = 'black';

  @HostBinding('style') style:object = {'color': 'black', 'font-weight': 'unset'}

  constructor() { }

  @HostListener('mouseenter') mouseOver(){
    this.style = {color: this.setColor, 'font-weight': 'bold'}
  }

  @HostListener('mouseout') mouseOut(){
    this.style = {color:'black', 'font-weight': 'unset'}
  }

}
