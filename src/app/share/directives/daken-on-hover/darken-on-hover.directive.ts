import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';


@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {


    @Input() onBrightness = '80%';
    @Input() offBrightness = '100%';

    constructor(private el: ElementRef, private render: Renderer2) {
    }

    @HostListener('mouseover')
    darkenOn() {        
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.onBrightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setStyle(this.el.nativeElement, 'filter',`brightness(${this.offBrightness})`);
    }
}