import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterModule } from '../../src/app/app';
// import {WorkerAppModule} from '@angular/platform-webworker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    // WorkerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

