import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'    // 属性选择器
})
export class HighlightDirective {
  // @Input() highlightColor: string ;
  // @Input() appHighlight: string;
  // 绑定到 @Input 别名 => 便于理解含义
  @Input('appHighlight') highlightColor: string;
  constructor(
    private elementRef: ElementRef   // 注入 ElementRef，引用宿主 DOM 元素
  ) {
    // elementRef.nativeElement.backgroundColor = 'yellow';    //  nativeElement 属性可以直接访问宿主 DOM 元素
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('yellow');
    // this.highlight(this.highlightColor);
    this.highlight(this.highlightColor || 'skyBlue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
