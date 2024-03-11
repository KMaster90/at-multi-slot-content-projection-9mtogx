import { Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WrapperComponent } from './wrapper/wrapper.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, WrapperComponent],
})
export class AppComponent {
  showPopup = false;
}
