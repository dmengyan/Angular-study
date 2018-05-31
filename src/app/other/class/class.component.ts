import { Component, OnInit } from '@angular/core';
import { Car, MotoCar, Jeep, Animal, Cat, Woman, Biology, Animals, Rabbit, Cats, Dog, Bird } from './fz';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // 调用封装的类
    const car = new Car('petrol');
    console.log(car.engine);
    car.driven(100);
    // 继承
    const moto = new MotoCar('moto');
    moto.driven(80);
    // 多态
    const jeep = new Jeep('jeep');
    jeep.driven(150);
    // 存取器
    const a = new Animal('Kitty'); // setter: Kitty
    a.name = 'Tom'; // setter: Tom
    console.log(a.name); // Jack
    // 静态方法
    const miao = new Cat('miaomiao');
    // 直接调用类的方法
    Cat.isCat(miao);      // ture
    Cat.isCat(a);         // false
    console.log(Cat.age); // 1
    // miao.isCat(miao);  // 报错 实例不能调用

    // 抽象类
    const alice = new Woman('Alice');
    alice.like('shoping');

    // demo
    // const dog = new Biology('旺财');
    const animal1 = new Animals('动物');
    console.log('=============');
    console.log(animal1.lifecycle);

    const tutu = new Rabbit('流氓兔', '灵儿');
    console.log(tutu.master);
    console.log(tutu.lifecycle);

    // 宠物添加方法
    const white = new Cats('毛球', '灵儿');
    white.said();
    const hh = new Dog('欢欢', '灵儿');
    hh.said();
    const bird = new Bird('彩儿', '灵儿');
    bird.said();
    const ff = new Rabbit('菲菲', '灵儿');
    ff.said();

    for ( let i = 0; i < white.lifecycle; i++ ) {
      setTimeout(function () {
        console.log(white.name + i + '岁时，体重为' + white.weight + ',身长为' + white.height );    // 0 1 2 ...
      }, 100 * i);
    }
  }



}
