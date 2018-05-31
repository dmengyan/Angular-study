import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype',
  templateUrl: './datatype.component.html',
  styleUrls: ['./datatype.component.css']
})
export class DatatypeComponent implements OnInit {
  // 二进制
  binaryLiteral = 0b1010;
  // 八进制
  octalLiteral = 0o744;
  // 模板字符串
  sentence = `计算结果：
  1 + 1 = ${ 1 + 1 }`;   // ${ } 嵌入表达式
  // 元组
  tuple: [string, number, boolean] = ['12345', 123, true, 666];

  constructor() { }

  ngOnInit() {
    console.log('二进制' + this.binaryLiteral);    // 会被编译成十进制 10
    console.log('二进制' + this.octalLiteral);     // 会被编译成十进制 484
    console.log('模板字符串' + this.sentence);
    this.tuple[0] = '换掉第一个了';
    console.log(this.tuple);
    // 1. 常数枚举
    const enum Colors { red, blue, yellow };
    console.log(Colors.red, Colors.blue, Colors.yellow);
    // 2. 外部枚举
    // declare enum Directions { up, down, left, right };
    // console.log(Directions.up, Directions.down, Directions.left, Directions.right);
  }
}
