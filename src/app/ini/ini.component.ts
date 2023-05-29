import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.scss']
})
export class IniComponent {
  constructor(private router:Router){}
  inicio(){
    this.router.navigate(["tra"])
  }
}
