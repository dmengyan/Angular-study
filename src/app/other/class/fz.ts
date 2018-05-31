
// TypeScript入门-类

// 封装
export class Car {
  engine: string;
  constructor(engine: string) {
      this.engine = engine;
  }
  driven(distance: number) {
    console.log('The car runs ' + distance + 'm powered by ' + this.engine );
  }
}
// 继承
export class MotoCar extends Car {
  constructor(engine: string) {
    super(engine);     // ? super()方法  -- 调用父类的构造函数。
  }
}
// 多态
export  class Jeep extends Car {
  constructor(engine: string) {
    super(engine);
  }
  driven(distance: number = 100 ) {
    console.log('Jeep ...');
    return super.driven(distance);
  }
}
// Jeep 类重写了父类的 drive() 方法，这样 driven() 方法在不同的类中就具有不同的功能，这就是多态。


// 修饰符

// public 共用的，哪里都可以访问
// private 私有的，只有在声明他的类中使用   // TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性。
// protected 受保护的，在该类及子类中使用

export class Animal {
  // public name: string;
  // private name: string;
  // protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 存取器
  get name() {
    return '动物';
  }
  set name(value) {
    console.log( 'setter:' + value );
  }
}

// 静态属性 static

export class Cat {
  static age = 1;
  name: string;
  static isCat(a) {
    console.log(a instanceof Cat);
  }
  constructor(name: string) {
    this.name = name;
  }
}

// 抽象类

abstract class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract like();
}

export class Woman {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  like(thing: string) {
    console.log(this.name + ' likes to ' + thing);
  }
}


// ------------------------------------------------------------------------------------------------ demo

// 物质分为 生物、有机物、无机物；
// 生物分为 动物、植物、微生物；
// 生物都有“生命周期”这个属性；
// 动物分为 宠物、野生动物、看家动物、人；
// 宠物分为 “宠物猫”、“宠物狗”、“宠物鸟”；

// 请根据题意构件一些类。

// 物质
export class Material {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
// 有机物
export class Organic extends Material {
  constructor(name: string) {
    super(name);
  }
}
// 无机物
export class Inorganic extends Material {
  constructor(name: string) {
    super(name);
  }
}
// 生物
export class Biology extends Material {
  // static lifecycle = '120';
  lifecycle = 120;
  constructor(name: string) {
    super(name);
  }
}
// 动物
export class Animals extends Biology {
  constructor(name: string) {
    super(name);
  }
}
// 植物
export class Plant extends Biology {
  constructor(name: string) {
    super(name);
  }
}
// 微生物
export class Microorganism extends Biology {
  constructor(name: string) {
    super(name);
  }
}
// 人
export class Humans extends Animals {
  constructor(name: string) {
    super(name);
  }
}
// 野生动物
export class Wildlife extends Animals {
  constructor(name: string) {
    super(name);
  }
}
// 家养动物
export class RaisingAnimals extends Animals {
  constructor(name: string) {
    super(name);
  }
}
// 宠物
export class Pet extends Animals {
  constructor(name: string) {
    super(name);
  }
}

// 猫
export class Cats extends Pet {
  master: string;
  lifecycle = 15;
  weight = 1;
  height = 1;
  constructor(name: string, master: string) {
    super(name);
    this.master = master;
  }
  said() {
    console.log(this.name + ' said 喵喵');
  }
}
// 狗
export class Dog extends Pet {
  master: string;
  constructor(name: string, master: string) {
    super(name);
    this.master = master;
  }
  said() {
    console.log(this.name + ' said 汪汪');
  }
}
// 鸟
export class Bird extends Pet {
  master: string;
  constructor(name: string, master: string) {
    super(name);
    this.master = master;
  }
  said() {
    console.log(this.name + ' said 唧唧');
  }
}
// 兔
export class Rabbit extends Pet {
  master: string;
  constructor(name: string, master: string) {
    super(name);
    this.master = master;
  }
  said() {
    console.log(this.name + ' said nothing');
  }
}
