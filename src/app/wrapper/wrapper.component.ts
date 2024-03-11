import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  inject,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PopupWindowComponent } from '../popup-window/popup-window.component';

type Y = ElementRef<HTMLElement>;

type ChildTemplate = Y;

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  standalone: true,
  imports: [CommonModule, PopupWindowComponent],
})
export class WrapperComponent {
  private renderer2 = inject(Renderer2);

  showPopup = false;
  index = 0;

  @ViewChildren('body') elementsToShow: QueryList<ElementRef<HTMLElement>>;
  @ContentChildren('customInput', { read: ElementRef })
  childTemplate: QueryList<ChildTemplate>;

  ngAfterViewInit() {
    this.childTemplate.forEach((c, i) =>
      this.renderer2.appendChild(
        this.elementsToShow.get(i).nativeElement,
        c.nativeElement
      )
    );
  }

  popupClosed(event) {
    this.showPopup = false;
  }

  showPopupHandler(c: ChildTemplate, i: number) {
    this.index = i;
    this.showPopup = true;
  }
}
