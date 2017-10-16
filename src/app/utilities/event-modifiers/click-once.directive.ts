import { Directive, ElementRef, Renderer2, OnInit, EventEmitter, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click.once]'
})
export class ClickOnceDirective implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('click.once') clickOnce = new EventEmitter();


  constructor(
    private renderer: Renderer2,
    private element: ElementRef) { }

    ngOnInit() {
      const unsubscribe = this.renderer.listen(
        this.element.nativeElement, 'click', event => {
          this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'true');
          this.clickOnce.emit(event);
          unsubscribe();
        });
    }

}
