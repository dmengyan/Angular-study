import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl:  './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() config: any[] = [];  // 传入容器中需要创建的表单属性
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>(); // 传出表单的值

  form: FormGroup;
  // 定义config作为配置对象，获取需要动态创建的内容
  // config: any[] = [];
  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.form = this.creatForm();
  }

  creatForm() {
    const group = this.fb.group({});
    // 循环遍历config，通过addControl() 方法，动态添加控件到表单数组
    this.config.forEach( control => group.addControl(control.name, this.fb.control('')) );
    // forEach() 对数组的每个元素执行一次提供的函数, 注意没有返回一个新数组! & 没有返回值!。
    return group;
  }

}
