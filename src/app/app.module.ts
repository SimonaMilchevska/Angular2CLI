import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import {DataServiceService} from "./data-service.service";

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    FirstComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	routing
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
