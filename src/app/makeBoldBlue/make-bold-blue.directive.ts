import { Directive, ElementRef, OnChanges, OnInit } from "@angular/core";

@Directive({
  selector: '[makeBoldBlue]'
})
export class MakeBoldBlue implements OnInit{
  constructor(private elementRef:ElementRef) {}

  ngOnInit(){
    let text= this.elementRef.nativeElement.innerHTML;
    if(text.includes('Text')){
      this.elementRef.nativeElement.style.color = 'Blue'
      this.elementRef.nativeElement.style.fontWeight = 'Bold'
    }
  }

}
