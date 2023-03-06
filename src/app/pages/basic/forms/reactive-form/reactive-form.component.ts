import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  name = new FormControl('');
  nameInput = '';
  profileForm = new FormGroup({
    firstname: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastname: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  get firstname() {
    return this.profileForm.get('firstname');
  }
}
