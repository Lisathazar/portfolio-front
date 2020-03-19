import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';
import { Article } from 'src/app/shared/article';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      response => { this.articles = response;
        console.log(this.articles)
      
    });
  }




}
