import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  successMessage: string;
  feedbackForm = this.fb.group({
    text: ['', Validators.required],
    rating: [''],
    email: ['']
  });

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRating = new EventEmitter<Number>();
  counter = 0;
  private  contacts:  Array<object> = [];
  constructor(private fb: FormBuilder, private  apiService:  ApiService) { }

  onSubmit(formData) {
    // tslint:disable-next-line:prefer-const
    let jsonObject  = {
       "ratings": 3,
       "comments": formData.text,
       "emailId": formData.email
  };
    this.postFeedbackData(jsonObject);
  }
  valueChanged() {
    this.counter = this.counter + 1;
    this.onRating.emit(this.counter);
  }
  public  getContacts() {
    this.apiService.getContacts().subscribe((response) => {
    });
}
public postFeedbackData (jsonObject) {
  // tslint:disable-next-line:prefer-const
  this.apiService.postFeedback(jsonObject).subscribe((response) => {
  if (response) {
    window.scrollTo(0, 0);
     this.successMessage = "The form has been submitted successfully and our representive will get in touch with you.";
  }
});
}
}
