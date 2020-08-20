import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simpleComponent/app.simple-component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,SimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [SimpleComponent],
  providers: [],
  bootstrap: [SimpleComponent]
})
export class AppModule { 
  constructor(private injector: Injector){
    
    const simpleElement = createCustomElement(SimpleComponent, {injector: this.injector});
    // defining the custom tag
    customElements.define('simple-element', simpleElement);
  }
}