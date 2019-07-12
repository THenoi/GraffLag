import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(params: any): Observable<any> {
    debugger;
    
    return this.http.post('/api/reg', { 'login': params.reglogin, 'password': params.regpas, 'gender':params.reggender,'email': params.regemail, 'birthdata': params.regbirthdata, 'phone':params.regphone})
  }
}
