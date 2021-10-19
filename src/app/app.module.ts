import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { FormsModule } from '@angular/forms';
import { LowerComponent } from './lower/lower.component';
import { UpperComponent } from './upper/upper.component';
import { LocalReferencesComponent } from './local-references/local-references.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { MakeBoldBlue } from './makeBoldBlue/make-bold-blue.directive';
import { BetterBoldBlueDirective } from './betterBoldBlue/better-bold-blue.directive';
import { HighlightOnHoverDirective } from './highlightOnHover/highlight-on-hover.directive';
import { HostBindingBoldBlueDirective } from './hostBinding-boldBlue/host-binding-bold-blue.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    LowerComponent,
    UpperComponent,
    LocalReferencesComponent,
    ViewchildComponent,
    MakeBoldBlue,
    BetterBoldBlueDirective,
    HighlightOnHoverDirective,
    HostBindingBoldBlueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
