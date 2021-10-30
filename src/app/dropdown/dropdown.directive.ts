import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {

  @Input() dropdownOptions:Array<string> = ['test1', 'test2', 'test3']


  @HostListener('click') onClick(){
    if(this.dropdownOpen === false){
      this.dropdownOpen = true;
      this.showDropdown();
    }else{
      this.dropdownOpen = false;
      this.hideDropdown();
    };
  };

  constructor( private elementRef:ElementRef, private renderer:Renderer2) { }

  dropdownOpen:boolean = false;

  buildListHTML(){
    let HTML = "";
    this.dropdownOptions.forEach((listItem)=>{
      HTML = HTML + "<li>" + listItem + "</li>";
    })
    return("<ul style='border: solid 1px; border-radius: 3px'>" + HTML + "</ul>")
  };

  hideDropdown(){
    this.renderer.setStyle(this.elementRef.nativeElement.children[0], 'display', 'none')
  };

  showDropdown(){
    this.renderer.setStyle(this.elementRef.nativeElement.children[0], 'display', 'block')
  };


  ngAfterViewInit(){
    const itemListHTML = this.buildListHTML();
    this.renderer.appendChild(this.elementRef.nativeElement, this.renderer.createElement('div'))
    this.renderer.setProperty(this.elementRef.nativeElement.children[0], 'innerHTML', itemListHTML)
    this.hideDropdown();
  }
}


// Example of use:
// <button appDropdown [dropdownOptions]='["cat","car", "book", "boat", "fish"]' style="height: 30px; width: 110px; line-height: 25px;">Show List ▼</button>
