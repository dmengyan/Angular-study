import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent'
})
export class ExponentPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent); // parseFloat() 解析字符串，返回浮点数，首字母不是数字，返回 NaN
    return Math.pow(value, isNaN(exp) ? 1 : exp); // pow( x,y ) 返回 x 的 y 次方的值
  }

}
