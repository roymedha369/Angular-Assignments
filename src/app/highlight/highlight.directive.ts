import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { noUndefined } from '@angular/compiler/src/util';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') colr : string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  }
  
  @HostListener('mouseover') onMouseOver(){
    this.renderer.setStyle(this.el.nativeElement,'background-color',this.colr)
  }

  @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.el.nativeElement,'background-color',"transparent")
  }

}
