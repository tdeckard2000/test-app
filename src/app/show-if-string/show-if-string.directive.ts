import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIfString]'
})
export class ShowIfStringDirective {

  @Input() set appShowIfString(value:any){
    this.viewContainerRef.clear();
    if(!/^\d+$/.test(value.trim()) && value.trim().length > 0){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    };
  };

  constructor(private viewContainerRef:ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
