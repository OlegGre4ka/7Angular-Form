import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles:[`input.ng-invalid.ng-touched{border:1px solid red}` ]
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  answers = [{
    type: 'yes',
    text: 'Так'
  }, {
    type: 'no',
    text: 'Ні'
  },
  {
    type: 'no-mean',
    text: 'Не впевнений'
  }];
  defaultCountry = 'ua';
  defaultAnswer = 'no-mean';

  formData = {};
  isSubmited = false;
 submitForm() {
 // submitForm(form: NgForm) {
 this.isSubmited = true;
 this.formData = this.form.value;
  console.log('Submited!', this.form);
    // console.log('Submited!', form);
  }
}
