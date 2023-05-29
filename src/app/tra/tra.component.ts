import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tra',
  templateUrl: './tra.component.html',
  styleUrls: ['./tra.component.scss']
})
export class TraComponent {
  constructor(private router:Router){}
  inicio(){
    this.router.navigate(["rut"])
  }
}
