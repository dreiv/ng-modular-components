import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { TemplateOrStringDirective } from './error/template-or-string.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    TemplateOrStringDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
