import { Component, OnInit } from '@angular/core';

interface NumberArray {
  [index: number]: number;
}

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  reverse: string;

  constructor() { }

  ngOnInit() {
    const array: NumberArray = [1.2, 2, 3, 5, 4];
    console.log(array);
    this.fun('sss');
    this.fun('sss', '111');

    const a = [];
    this.push(a, 1, 2, 3, 8);
    console.log(this.reserve('秋山满落叶，瘦影惊斜阳'));
    console.log(this.reserve1('你是年少的欢喜'));
  }
  // 定义函数的方法1： 函数声明    2：函数表达式
  // 函数的默认参数
  fun(first: string, last: string = '000') {
    console.log( first + ' -- ' + last);
  }
  // 函数的剩余参数
  push(array, ...items) {
    items.forEach(function (item) {
      array.push(item);
    });
    console.log(array);
  }
  // 重载
  // 定义：函数接受不同类型或者不同数量的参数

  // 通过联合类型实现
  reserve(x: number | string ): number | string {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    }
  }
  // 弊端是 不能表现出来输入输出的数据类型是一致的
  reserve1(x: number): number;
  reserve1(x: string): string;
  reserve1(x: number | string ): number | string {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    }
  }

  // 类型断言
  // 1. <类型>值
  // 2. 值 as 类型
  // getLength(something: string | number): number {
  //   if (something.length) {
  //     return something.length;
  //   } else {
  //     return something.toString().length;
  //   }
  // }
  // 以上方法会报错，需要添加类型断言
  getLength2(something: string | number): number {
    if ((<string>something).length) {
      return (<string>something).length;
    } else {
      return something.toString().length;
    }
  }



}
