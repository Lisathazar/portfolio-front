import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';
import { Article } from 'src/app/shared/article';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss']
})
export class AdminArticleComponent implements OnInit {

  articles: Article[];
  modify: Boolean= false;
  create: Boolean= false;
  articleToPut :Article;
  private newArticle : Article = new Article();
  visibility: number;

  modifyArticleForm = this.fb.group({
    title: [''],
    image: [''],
    description: [''],
    texte: [''],
    visibility:['']
  });

  createArticleForm = this.fb.group({
    title: [''],
    image: [''],
    description: [''],
    texte: [''],
    visibility:['']
  });

  constructor(private articleService: ArticleService ,private fb: FormBuilder) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      response => { this.articles = response;
        console.log(this.articles)
      
    });
  }

  putArticle(article){
    this.modify= true;
    this.create=false;
    this.articleToPut = article;

  }

  return(){
    this.modify=false;
    this.create=false;
  }

  createNew(){
    this.modify=false;
    this.create=true;
  }

  changeVisibility(event){
    this.visibility =  event;
    console.log(this.visibility)
  }

  submitCreateArticle(){
    
    this.newArticle.title= this.createArticleForm.value.title;
    console.log(this.newArticle)
    this.newArticle.image= this.createArticleForm.value.image;
    this.newArticle.description= this.createArticleForm.value.description;
    this.newArticle.texte= this.createArticleForm.value.texte;
    this.newArticle.visibility= this.visibility;
    this.newArticle.user_id = 1;
    this.articleService.postArticle(this.newArticle).subscribe(
      newArticle => {
       console.log(newArticle)
       }
    )
  }



deleteArticle(article: Article){
    this.articleService.deleteArticle(article.id).subscribe(
      (error) => {
        if (!error) {
          console.log("ok")
          location.reload();
        }
      }
    )
  }


  submitModifyArticle(){
   
    if (this.modifyArticleForm.value.title != '') {
      this.articleToPut.title = this.modifyArticleForm.value.title
    };
    if (this.modifyArticleForm.value.image) {
      this.articleToPut.image = this.modifyArticleForm.value.image;
    };
    if (this.modifyArticleForm.value.description) {
      this.articleToPut.description = this.modifyArticleForm.value.description;
    };
    if (this.modifyArticleForm.value.texte) {
      this.articleToPut.texte = this.modifyArticleForm.value.texte;
    };
    if (this.modifyArticleForm.value.visibility) {
      this.articleToPut.visibility = this.visibility;
    };
    this.articleToPut.user_id=1;
   
    console.log(this.articleToPut)
    this.articleService.putArticle(this.articleToPut).subscribe(
      article => {
        console.log(article)
    //    location.reload();
      });
  
    (err) => console.log(err)
  }


}
