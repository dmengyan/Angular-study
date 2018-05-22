import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-di4',
  templateUrl: './di4.component.html',
  styleUrls: ['./di4.component.css']
})
export class Di4Component implements OnInit {
  // idNumber = '406416199210256062';  // 身份证号
  // linkPhone = '18266707769';
  // idNumber: string ;
  // linkPhone: string;
  idNumber = '' ;
  linkPhone = '';
  m: boolean;
  head: string;
  constructor() { }

  update(value: string) {
    this.idNumber = value;
  }
  update2(value: string) {
    this.linkPhone = value;
}


  // 行政区号
  get districtNo (): string {
    return this.idNumber.substr(0, 6);
  }
  // 出生年月日
  get birthday(): string {
    return this.idNumber.substr(6, 8);
  }

  // 电话类型
  get phoneType(): string {
    const mobile = /^1[3|5|8]\d{9}$/;
    const phone = /^0\d{2,3}-?\d{7,8}$/;
    if (this.linkPhone.length < 11) {
      return '号码格式不对';
    }else {
      this.m = mobile.test(this.linkPhone);
      return this.m ? '手机号' : '座机号';
    }

  }

  get tail(): string {
      return this.linkPhone.substr(-4, 4);
  }

  get Operator(): string{
    this.head = this.linkPhone.substr(0, 3);
    const yd = '137' || '134' || '135' || '136' || '137' || '138' || '139'
      || '150' || '151' || '152' || '157' || '158' || '159' || '182' || '183' || '187' || '188';
    const lt = '130' || '131' || '132' || '155' || '156' || '186' || '185';
    const dx = '133' || '153' || '180' || '181' || '189';

    if ( this.linkPhone.length !== 11 ) {
      return '号码格式不对';
/*      else {
        if ( this.head = yd ) {
          return '移动';
        }else {
          if ( this.head = lt ) {
            return '联通';
          }else {
            return '电信';
          }
        }
      } */

    }


  }
  ngOnInit() {
  }

}
