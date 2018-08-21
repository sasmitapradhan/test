import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  successMessage: string;
  feedbackForm = this.fb.group({
    text: ['', Validators.required],
    rating: ['']
  });

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRating = new EventEmitter<Number>();
  counter = 0;
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    window.scrollTo(0, 0);
    this.successMessage = "The form has been submitted successfully and our representive will get in touch with you.";
  }
  valueChanged() {
    this.counter = this.counter + 1;
    this.onRating.emit(this.counter);
  }
}
