import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  successMessage: string;
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: [''],
    mobileNum: [''],
    subject: [''],
    message: [''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    window.scrollTo(0, 0);
    this.successMessage = "The form has been submitted successfully and our representive will get in touch with you.";
  }
}

