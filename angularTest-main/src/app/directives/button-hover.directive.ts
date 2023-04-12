import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
})
export class ButtonHoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setColor('white');
    this.setScale(1.2);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setColor('black');
    this.setScale(1);
  }

  setScale(scale: number): void {
    this.el.nativeElement.style.scale = scale;
  }

  setColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }
}
