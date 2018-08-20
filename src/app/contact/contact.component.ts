import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
public data: any = [];
  submitted = false;
  save(name, email, mobile, subject, message): void {
    this.data['name'] = name;
    this.data['email'] = email;
    this.data['mobile'] = mobile;
    this.data['subject'] = subject;
    this.data['message'] = message;
    this.http.put<any>('http://localhost/api/v1/update/', this.data).subscribe(
res => {
console.log(res);
},
(err: HttpErrorResponse) => {
if (err.error instanceof Error) {
console.log("Client-side error occured.");
} else {
console.log("Server-side error occurred.");
}
});
}
constructor(private http: HttpClient) { }
  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
