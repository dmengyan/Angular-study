import { Directive, Input, OnInit,
  ComponentFactoryResolver, ViewContainerRef,
  ComponentRef, Type, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
// 我们使用 input 或 select 类型来声明组件的类型，
// 因此需要创建一个对象来将字符串映射到相关的组件类
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormButtonComponent } from './form-button/form-button.component';

import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[appDynamicField]'// 将其应用为属性而不是元素
  // => 这样做的好处是，我们的指令可以应用在 Angular 内置的 <ng-container> 指令上。
  // <ng-container> 是一个逻辑容器，可用于对节点进行分组，但不作为 DOM 树中的节点，
  // 它将被渲染为 HTML中的 comment 元素。
  // 因此配合 <ng-container> 指令，我们只会在 DOM 中看到我们自定义的组件，
  // 而不会看到 <dynamic-field> 元素
  // (因为 DynamicFieldDirective 指令的 selector 被设置为 [dynamicField] )
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {

  // @Input() config: Object;  // 用于动态设置config对象
  @Input() config: FieldConfig;
  @Input() group: FormGroup;
  component: ComponentRef<Field>;

  // 接下来使用 ComponentFactoryResolver ，ViewContainerRef 对象 => 动态渲染组件
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }


  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    // 通过 components['button'] 获取对应的 FormButtonComponent 组件类
    // const component = components[this.config.type];
    // 然后把它传递给 ComponentFactoryResolver 对象 => 获取对应的 ComponentFactory (组件工厂)
    // const factory = this.resolver.resolveComponentFactory<any>(component);]
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);  // factory
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
