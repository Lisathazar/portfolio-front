import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Realization } from './realization';

@Injectable({
  providedIn: 'root'
})
export class RealizationService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  getRealization(): Observable<any> {
    return this.http.get(`${this.baseUrl}/realizations`);
  }

  postRealization(newRealization): Observable<any> {
    return this.http.post(`${this.baseUrl}/realizations`,newRealization);
  }

  deleteRealization(id: number): Observable<any> {
    const url = `${this.baseUrl}/realizations/${id}`;
    return this.http.delete(url);

  }

  putRealization(realization: Realization): Observable<any> {
    const putReaUrl = `${this.baseUrl}/realizations/${realization.id}`;
    return this.http.put(putReaUrl, realization);
  }


  

}
