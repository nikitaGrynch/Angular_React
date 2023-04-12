import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class ZoomDirective {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.transform = 'scale(0.5)';
    // el.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseenter') onMouseEnter() {
    //this.setScale(1.2);
    this.setColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this.setScale(0.7);
    this.setColor('blue');
  }

  setColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }
  setScale(size: number): void {
    this.el.nativeElement.style.transform = `scale(${size})`;
  }
}
