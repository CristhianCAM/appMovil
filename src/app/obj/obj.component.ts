import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obj',
  templateUrl: './obj.component.html',
  styleUrls: ['./obj.component.scss']
})
export class ObjComponent {
constructor(private router:Router){}
inicio(){
  this.router.navigate(["ini"])
}
}