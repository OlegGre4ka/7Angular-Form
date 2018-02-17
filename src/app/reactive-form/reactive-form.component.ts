import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  text = 'Продовжуємо далі вивчати форми. Angular представляє спеціальний модуль для цього - ReactiveFormsModule';
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
form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('ee@ee.ee'),
      pass: new FormControl(''),
      country: new FormControl('by'),
      answer: new FormControl('no-mean')
    });
  }
  submitForm(){
    console.log('Реактивна форма вдало відправлена!', this.form);
  }
}