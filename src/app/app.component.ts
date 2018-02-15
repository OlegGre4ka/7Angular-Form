import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //@ViewChild('form') form: NgForm;
  answers = [{
    type: 'yes',
    text: 'Так'
  }, {
    type: 'no',
    text: 'Ні'
  }];

 // submitForm() {
  submitForm(form: NgForm) {
    
   // console.log('Submited!', this.form);
    console.log('Submited!', form);
    
  }
}
