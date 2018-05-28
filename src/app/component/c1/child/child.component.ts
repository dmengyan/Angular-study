import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  MsgToParent: string;
  @Input() message: string;
  @Output() outer = new EventEmitter<string>();
  name = 'Lily';

  // ngOnChange
  @Input() major: number;
  @Input() minor: number;

  // setter
  _p: string;
  @Input()
  set p(p: string) {
    this._p = p.replace(/fuck/, '**');
  }
  get p(): string { return this._p; }

  ngOnChanges() {
    console.log('当前版本号：' + this.major + '.' + this.minor);
  }

  // Output
  onClick() {
    // this.MsgToParent = 'This is the message to parent';
    this.outer.emit('This is the message to parent');
  }

  // 本地变量
  alert() {
    alert( '通过本地变量获得子组件的事件');
  }

  alert2() {
    alert( '通过@ViewChild()获得子组件的事件');
  }

}
