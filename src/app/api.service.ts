import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:3000';
  constructor(private  httpClient:  HttpClient) { }

  getContacts() {
    return  this.httpClient.get(`${this.API_URL}/feedbacks`);
 }
 postFeedback(jsonData) {
 return  this.httpClient.post(`${this.API_URL}/feedbacks/`, jsonData);
}
postContactForm(jsonData) {
  console.log(jsonData);
  return  this.httpClient.post(`${this.API_URL}/contacts/`, jsonData);
}
// tslint:disable-next-line:eofline
}