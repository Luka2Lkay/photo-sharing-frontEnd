import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationInterface } from '../interfaces/registration-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http: HttpClient) {
  }

  register(data:RegistrationInterface): Observable<RegistrationInterface> {
    return this._http.post<RegistrationInterface>('http://127.0.0.1:3300/register', data)
  }
}
