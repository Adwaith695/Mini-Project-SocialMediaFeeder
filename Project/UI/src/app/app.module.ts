import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { FacebookComponent } from './home/facebook/facebook.component';
import { WhatsappComponent } from './home/whatsapp/whatsapp.component';
import { TwitterComponent } from './home/twitter/twitter.component';
import { FacebookAddPostComponent } from './home/facebook/facebook-add-post/facebook-add-post.component';
import { FacebookViewPostComponent } from './home/facebook/facebook-view-post/facebook-view-post.component';
import { FacebookDeletePostComponent } from './home/facebook/facebook-delete-post/facebook-delete-post.component';
import { TwitterAddTwitComponent } from './home/twitter/twitter-add-twit/twitter-add-twit.component';
import { TwitterTrendingComponent } from './home/twitter/twitter-trending/twitter-trending.component';
import { TwitterViewTwitComponent } from './home/twitter/twitter-view-twit/twitter-view-twit.component';
import { DashboardComponent } from './home/dashboard/dashboard.component'
import { UserGuard } from './user.guard';
import { AllInOneComponent } from './home/all-in-one/all-in-one.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    FacebookComponent,
    WhatsappComponent,
    TwitterComponent,
    FacebookAddPostComponent,
    FacebookViewPostComponent,
    FacebookDeletePostComponent,
    TwitterAddTwitComponent,
    TwitterTrendingComponent,
    TwitterViewTwitComponent,
    DashboardComponent,
    AllInOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
