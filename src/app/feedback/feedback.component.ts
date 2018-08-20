import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  public data: any = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRating = new EventEmitter<Number>();
  constructor(private http: HttpClient) { }

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

}
