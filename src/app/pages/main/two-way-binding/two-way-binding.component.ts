import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent {
  alertInputValue(arg0: any) {
    alert(arg0);
  }
  fontSize: number = 8;
  increaseFontSize() {
    this.resize(+1);
  }
  decreaseFontSize() {
    this.resize(-1);
  }

  resize(delta: number) {
    this.fontSize = Math.min(40, Math.max(8, this.fontSize + delta));
  }
}
