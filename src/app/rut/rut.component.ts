import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rut',
  templateUrl: './rut.component.html',
  styleUrls: ['./rut.component.scss']
})
export class RutComponent {
  constructor(private router:Router){}
  inicio(){
    this.router.navigate(["ini"])
  }
}
