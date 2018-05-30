import { Directive, ElementRef, Input } from '@angular/core';
/*让金箍棒变大或变小的指令*/
@Directive({
  selector: '[appSize]'
})
export class SizeDirective {

// 金箍棒变大还是变小?
@Input('appSize') set JGBSize(bigger: string){
	// console.log('---style---',this.el.nativeElement.style);
  if (bigger === undefined) { // 默认大小
		// console.log('---bigger undefined---');
    this.el.nativeElement.style.width = '200px';
    this.el.nativeElement.style.height = '50px';
  } else {
    const w = parseInt(this.el.nativeElement.style.width.replace('px', ''));
    const h = parseInt(this.el.nativeElement.style.height.replace('px', ''));
			// console.log('w and h','w:' + w + ',h:' + h);
    if (bigger.indexOf('true') > -1) {// 变大
      this.el.nativeElement.style.width = (w + 10)  + 'px';
      this.el.nativeElement.style.height = (h + 5)  +  'px';
			// console.log('---bigger---width',this.el.nativeElement.style.width);
			// console.log('---bigger---height',this.el.nativeElement.style.height);
    }else {// 变小
			// console.log('----smaller---',this.el.nativeElement);
      this.el.nativeElement.style.width = (w - 10)  +  'px';
      this.el.nativeElement.style.height = (h - 5)  +  'px';
			// console.log('---bigger---width',this.el.nativeElement.style.width);
			// console.log('---bigger---height',this.el.nativeElement.style.height);
    }
  }
}
  constructor(private el: ElementRef) { }
}
