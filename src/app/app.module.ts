import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RealizationComponent } from './components/realization/realization.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRealizationComponent } from './components/admin-realization/admin-realization.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminArticleComponent } from './pages/admin-article/admin-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    LandingPageComponent,
    RealizationComponent,
    ContactComponent,
    ArticlesComponent,
    AdminComponent,
    AdminRealizationComponent,
    AdminArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
