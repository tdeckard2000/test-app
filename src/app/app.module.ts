import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { FormsModule } from '@angular/forms';
import { LowerComponent } from './lower/lower.component';
import { UpperComponent } from './upper/upper.component';
import { LocalReferencesComponent } from './local-references/local-references.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    LowerComponent,
    UpperComponent,
    LocalReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
