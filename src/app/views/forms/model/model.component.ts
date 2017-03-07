import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  ngOnInit() {
  }
title = 'loginForm';
  loginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({

      name: ['', Validators.required],
      oracleId: ['', Validators.maxLength(6)],
      password: ['', Validators.required]

    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

  }
  onValueChanged(data?: any) {

    if (!this.loginForm) { return; }

    const form = this.loginForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && (control.dirty || control.touched) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'name': 'People',
    'oracleId': '123456'
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'oracleId': {
      'required': 'maxlength length is 6.'
    }
  };
  onSubmit() {
    this.submitted = true;
  }
}
