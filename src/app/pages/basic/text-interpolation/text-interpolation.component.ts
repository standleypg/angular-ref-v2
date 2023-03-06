import { Component } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.scss'],
})
export class TextInterpolationComponent {
  _pageTitle = 'Text Interpolation';

  get pageTitle() {
    return this._pageTitle;
  }
  set pageTitle(val: string) {
    this._pageTitle = val;
  }
}
