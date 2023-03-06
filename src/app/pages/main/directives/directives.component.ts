import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  isRed = true;
  isCustomStyleEnabled = false;
  currentSyle = {};
  name?:string;

  ngOnInit(): void {
    this.currentSyle = {
      'font-style': 'italic',
      'font-weight': 'bold',
    };
  }

  onClickChangeColor() {
    this.isRed = !this.isRed;
  }

  onChangeStyle() {
    this.isCustomStyleEnabled = !this.isCustomStyleEnabled;
  }
}
