import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjComponent } from './obj/obj.component';
import { IniComponent } from './ini/ini.component';
import { TraComponent } from './tra/tra.component';
import { RutComponent } from './rut/rut.component';

const routes: Routes = [
  {path:'obj',component:ObjComponent},
  {path:'tra',component:TraComponent},
  {path:'rut',component:RutComponent},
  {path:'ini',component:IniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
