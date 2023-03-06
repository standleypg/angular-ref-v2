import { Component } from '@angular/core';
import { Mock } from 'src/app/models/mock';

@Component({
  selector: 'app-routing-example',
  templateUrl: './routing-example.component.html',
  styleUrls: ['./routing-example.component.scss'],
})
export class RoutingExampleComponent {
  people = Mock
}
