import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  updata(params: any): Observable<any> {
    return this.http.post('/api/update', { 'login': params.login, 'password': params.password,'passwordnew':params.passwordnew})
  }
  
}
