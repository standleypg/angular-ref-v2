import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent {
  isTrue = false;
  switchName = 'Mario';
  items = [{ name: 'Mario' }, { name: 'Yoshi' }, { name: 'Yoshua' }];
}
