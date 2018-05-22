import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  MsgToParent: string;
  @Input() private message: string;
  @Output() private  outer = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // this.MsgToParent = 'This is the message to parent';
    this.outer.emit('This is the message to parent');
  }

}
