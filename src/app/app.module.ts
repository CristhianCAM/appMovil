import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjComponent } from './obj/obj.component';
import { IniComponent } from './ini/ini.component';
import { TraComponent } from './tra/tra.component';
import { RutComponent } from './rut/rut.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjComponent,
    IniComponent,
    TraComponent,
    RutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
