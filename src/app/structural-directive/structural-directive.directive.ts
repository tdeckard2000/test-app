import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {

  @Input() set appStructuralDirective(val:boolean){
    if(val === false){
      this.viewContainerRef.clear();
    }else if(val === true){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  };

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
