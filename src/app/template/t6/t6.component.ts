import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-t6',
  templateUrl: './t6.component.html',
  styleUrls: ['./t6.component.css'],
  animations: [ flyIn ]
})
export class T6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
