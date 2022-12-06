import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @HostBinding('style.backgroundColor')
  backGround = 'red'

  @HostBinding('style.color')
  color = 'black'

  constructor() { }

  @HostListener('mouseenter')
  mouseEnter() {
    this.backGround = 'yellow'
    this.color = 'salmon' 
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.backGround = 'red'
    this.color = 'black'
  }
}
