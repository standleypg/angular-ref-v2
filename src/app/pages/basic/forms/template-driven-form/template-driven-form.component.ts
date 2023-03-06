import { Component } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  submitted: boolean = false;
  tdf_onSubmit() {
    this.submitted = !this.submitted;
  }
  // tdf - stand for template driven form
  tdf_species = ['fish', 'cat', 'dog'];
  tdf_model = new Pet();

  constructor() {
    this.tdf_model.id = 1;
    this.tdf_model.name = 'Goldie';
    this.tdf_model.specie = this.tdf_species[0];
  }
}
