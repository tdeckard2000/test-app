import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindingBoldBlue]'
})
export class HostBindingBoldBlueDirective {

  @HostBinding('style') style:object = {'color': 'black', 'font-weight': 'unset'}

  constructor() { }

  @HostListener('mouseenter') mouseOver(){
    this.style = {color:'blue', 'font-weight': 'bold'}
  }

  @HostListener('mouseout') mouseOut(){
    this.style = {color:'black', 'font-weight': 'unset'}
  }

}
