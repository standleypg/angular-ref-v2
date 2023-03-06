import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})

export class HighlightDirective {
  @Input() hightlightColor = '';

  
  @HostListener('mouseenter') onMouseEnter() {
    this.highligth(this.hightlightColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highligth('');
  }
  constructor(private el: ElementRef) {}

  private highligth(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
