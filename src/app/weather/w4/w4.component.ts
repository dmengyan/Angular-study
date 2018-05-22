import { Component, OnInit } from '@angular/core';
import { Hero} from '../w2/hero';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-w4',
  templateUrl: './w4.component.html',
  styleUrls: ['./w4.component.css']
})
export class W4Component implements OnInit {

  /// 模板驱动表单验证 ///
  demo = new Hero( 12, 'Lily', '16');

  /// 响应式表单验证 ///
  rtForm: FormGroup;
  hero  = { name: 'Rose', age: '12'};
  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    // 报错：Expected validator to return Promise or Observable.
    //   this.rtForm = this.formBuilder.group({
    //     name: [this.hero.name, Validators.required, Validators.minLength(4)],  // 同步验证器？异步验证器
    //     age: this.hero.age,
    //   });
    this.rtForm = new FormGroup({
      // 同步验证器 -- 作为第二个参数传进去
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/balabala/i)
      ]),
      age: new FormControl(this.hero.age)
    });

  }
  //  在响应式表单中，通常会使用 get 方法来访问表单控件，但有时候为模板定义一些 getter 作为简短形式。
  get name() { return this.rtForm.get('name'); }

  get age() { return this.rtForm.get('age'); }

}
