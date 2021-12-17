import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AllInOneComponent } from './home/all-in-one/all-in-one.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FacebookAddPostComponent } from './home/facebook/facebook-add-post/facebook-add-post.component';
import { FacebookDeletePostComponent } from './home/facebook/facebook-delete-post/facebook-delete-post.component';
import { FacebookViewPostComponent } from './home/facebook/facebook-view-post/facebook-view-post.component';
import { FacebookComponent } from './home/facebook/facebook.component';
import { HomeComponent } from './home/home.component';
import { TwitterAddTwitComponent } from './home/twitter/twitter-add-twit/twitter-add-twit.component';
import { TwitterTrendingComponent } from './home/twitter/twitter-trending/twitter-trending.component';
import { TwitterViewTwitComponent } from './home/twitter/twitter-view-twit/twitter-view-twit.component';
import { TwitterComponent } from './home/twitter/twitter.component';
import { WhatsappComponent } from './home/whatsapp/whatsapp.component';
import { UserGuard } from './user.guard';

const routes: Routes = [

  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'',component:HomeComponent,canActivate:[UserGuard],
    children:[
      {
        path:'',component:DashboardComponent
      },
      {
        path:'facebook',component:FacebookComponent
      },
      {
        path:'whatsapp',component:WhatsappComponent
      },
      {
        path:'twitter',component:TwitterComponent
      },
      {
        path:'twitter-add-twit',component:TwitterAddTwitComponent,
      },
      {
        path:'twitter-view-twit',component:TwitterViewTwitComponent,
      },
      {
        path:'twitter-trending',component:TwitterTrendingComponent,
      },
      {
        path:'facebook-add-post',component:FacebookAddPostComponent,
      },
      {
        path:'facebook-view-post',component:FacebookViewPostComponent,
      },
      {
        path:'facebook-delete-post',component:FacebookDeletePostComponent
      },
      {
        path:'all',component:AllInOneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
