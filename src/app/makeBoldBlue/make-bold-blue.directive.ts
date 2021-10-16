import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[makeBoldBlue]'
})
export class MakeBoldBlue implements OnInit {
  constructor(private elementRef:ElementRef) {}

  ngOnInit(){
    this.elementRef.nativeElement.style.color = 'Blue'
    this.elementRef.nativeElement.style.fontWeight = 'Bold'
  }

}
