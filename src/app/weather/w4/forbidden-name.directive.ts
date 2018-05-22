
/** ----------------------自定义验证指令---------------------------*/

import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
// 定义该指令的元数据
@Directive({
  selector: '[appForbiddenName]', // 定义指令在 HTML 代码中匹配的方式
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}] // 注册ForbiddenValidatorDirective
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;
  validate(control: AbstractControl): {[key: string]: any} {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }


}

// 在模板驱动表单中，你不用直接访问 FormControl 实例。
// 所以不能像响应式表单中那样把验证器传进去，而应该在模板中添加一个指令。
