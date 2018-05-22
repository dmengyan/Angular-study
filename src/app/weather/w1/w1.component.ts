
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-w1',
  templateUrl: './w1.component.html',
  styleUrls: ['./w1.component.css']
})
export class W1Component implements OnInit {
  clickMsg: string;
  keyValue: string;
  updateValue: string;
  userName: string;
  usernames = ['Lily', 'Roe', 'Alice'];

  constructor() {}

  ngOnInit() {
  }

  onclick() {
    this.clickMsg = ' Hello! ';
  }
  onKey(event: any) {
    this.keyValue = event.target.value;
  }
  update(value: string ) {
    this.updateValue = value;
  }

  addUser(value: string) {
    // this.userName = value;
    this.usernames.push(value);
  }

}
