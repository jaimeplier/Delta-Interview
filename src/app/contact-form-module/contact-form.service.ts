import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  
  constructor(private http: HttpClient) { }

  
  sendContactForm(form:any) {
    return this.http.post(environment.apiUrl + '/endpoint' , form);
  }

}
