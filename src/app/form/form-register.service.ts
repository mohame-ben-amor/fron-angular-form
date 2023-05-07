import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormRegister } from './form.model';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class FormRegisterService {
  constructor(private http: HttpClient) { }

  register(form : FormRegister) : Observable<any>{
    return this.http.post<FormRegister>("http://localhost:3000/api/register",form);
  }
}