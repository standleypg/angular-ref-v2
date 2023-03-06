import { Component } from '@angular/core';

@Component({
  selector: 'app-att-class-style-binding',
  templateUrl: './att-class-style-binding.component.html',
  styleUrls: ['./att-class-style-binding.component.scss'],
})
export class AttClassStyleBindingComponent {
  onSale = true;
  color: string = '#000';
}
