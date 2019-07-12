import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  delete(params: any): Observable<any> {

    
    return this.http.post('/api/delete', { 'login': params.login, 'password': params.password})
  }
}
