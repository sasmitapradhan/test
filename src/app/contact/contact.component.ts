import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  successMessage: string;
  contactForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        Name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', [Validators.required, Validators.minLength(6)]]
    });
}
get f() { return this.contactForm.controls; }
onSubmit(formData) {
  this.submitted = true;

  // stop here if form is invalid
  if (this.contactForm.invalid) {
      return;
  }
  let jsonObj = {
     "Name": formData.Name,
     "email": formData.email,
     "subjet" : formData.subject,
     "message": formData.message
  };
  this.postContactForm(jsonObj);
}
  public postContactForm(jsonObj) {
    this.apiService.postContactForm(jsonObj).subscribe((response) => {
      if (response) {
        window.scrollTo(0, 0);
         this.successMessage = "The form has been submitted successfully and our representive will get in touch with you.";
      }
  });
}
}

