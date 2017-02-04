import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ComponentsModule} from "./components/components.module";
import {CoreModule} from "./core/core.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AccordionModule} from "ng2-bootstrap";

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgbModule.forRoot(),
      ComponentsModule,
      CoreModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}

