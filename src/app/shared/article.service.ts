import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  getArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/articles`);
  }

  postArticle(newArticle): Observable<any> {
    return this.http.post(`${this.baseUrl}/articles`,newArticle);
  }

  deleteArticle(id: number): Observable<any> {
    const url = `${this.baseUrl}/articles/${id}`;
    return this.http.delete(url);

  }

  putArticle(article: Article): Observable<any> {
    console.log( article)
    const putArtUrl = `${this.baseUrl}/articles/${article.id}`;
    console.log(putArtUrl);
    return this.http.put(putArtUrl, article);
  }
}
