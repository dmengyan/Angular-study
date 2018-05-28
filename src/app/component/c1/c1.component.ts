import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit, AfterViewInit {
  MsgToChild: string;
  MsgFormChild: string;
  major = 1;
  minor = 2;
  // 通过@ViewChild()获取子组件的内容
  viewChildMsg: string;
  @ViewChild(ChildComponent)  private childComponent: ChildComponent;

  // setter
  Psetter = ' fuck!';
  constructor() { }

  ngOnInit() {
    this.MsgToChild = 'This is the message form parent';
    this.viewChildMsg = this.childComponent.name;
  }

  ngAfterViewInit() {

  }

  get() {
    this.childComponent.alert2();
  }

  recieve(value: string) {
    this.MsgFormChild = value;
  }

  // ngOnChange


  newMajor() {
    this.major++;
  }
  newMinor() {
    this.minor++;
  }

}
