import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  END_POINT = 'https://pixabay.com/api/?key=';
  API_KEY = '13119377-fc7e10c6305a7de49da6ecb25';

  private params = new HttpParams()
    .set('key', this.API_KEY)
    .set('lang', 'es')
    .set('per_page', 33);

  constructor(private http: HttpClient) {}

  getImages(page: number): Observable<any> {
    this.params = this.params.set('page', page);
    return this.http.get(this.END_POINT, { params: this.params });
  }

  getImagesByPattern(page: number, pattern: string): Observable<any> {
    const par = this.params.set('page', page).set('q', pattern);
    return this.http.get(this.END_POINT, { params: par });
  }

  getImagesByCategory(page: number, category: string): Observable<any> {
    const par = this.params.set('category', category);
    return this.http.get(this.END_POINT, { params: par });
  }
}
