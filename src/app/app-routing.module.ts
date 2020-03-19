import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { RealizationComponent } from './components/realization/realization.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRealizationComponent } from './components/admin-realization/admin-realization.component';
import { AdminArticleComponent } from './pages/admin-article/admin-article.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [  
{ path: '',  
  component: HomeComponent
}, 
{ path: 'realization', component: RealizationComponent},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: AdminComponent,
},
{
  path: 'admin-realization',
  component: AdminRealizationComponent,
},

{
  path: 'admin-article',
  component: AdminArticleComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
