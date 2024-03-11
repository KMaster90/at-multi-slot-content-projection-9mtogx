import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PopupWindowComponent {
  @Input()
  isOpen = false;

  @Input()
  title = 'Title';

  @Output()
  onClose = new EventEmitter<string>();

  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
