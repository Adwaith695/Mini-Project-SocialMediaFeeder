import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-twitter-add-twit',
  templateUrl: './twitter-add-twit.component.html',
  styleUrls: ['./twitter-add-twit.component.css']
})
export class TwitterAddTwitComponent implements OnInit {

  public loading = false;
  constructor(private http:HttpClient,private sncakbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  addPost(form:NgForm){
    this.loading = true
    let data = {
      API_KEY:form.value.API_KEY.trim(),
      API_KEY_SECRET:form.value.API_KEY_SECRET.trim(),
      ACCESS_TOKEN:form.value.ACCESS_TOKEN.trim(),
      ACCESS_TOKEN_SECRET:form.value.ACCESS_TOKEN_SECRET.trim(),
      msg:form.value.message.trim()
    }
    this.http.post<any>(environment.API+'twitter',data).subscribe(
      {
        next: (res :any)=> {
          this.loading = false
          this.sncakbar.open(res.Message,undefined,{duration:3000,panelClass:['alert','alert-success','bg-success']});
          form.resetForm()
        },
        error: (err:any) =>{
          this.loading = false
          
          this.sncakbar.open(err.error.Message,undefined,{duration:3000,panelClass:['alert','alert-danger','bg-danger']});
          form.resetForm()

        }
      }
      
      
    )

  }
}
