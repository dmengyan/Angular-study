import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  MsgToChild: string;
  MsgFormChild: string;
  constructor() { }

  ngOnInit() {
    this.MsgToChild = 'This is the message form parent';
  }

  recieve(value: string) {
    this.MsgFormChild = value;
  }

}
