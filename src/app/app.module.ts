import { AutofocusModule } from './autofocus/autofocus.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AutofocusModule
  ],
  declarations: [ExampleComponent],
  exports: [],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
