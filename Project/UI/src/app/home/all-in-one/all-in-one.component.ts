import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent implements OnInit {

  
  public loading = false;
  constructor(private http:HttpClient,private sncakbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  addPost(form:NgForm){
    this.loading = true
    let data = {
      to:form.value.to.trim(),
      sid:form.value.twilio.trim(),
      authToken:form.value.authToken.trim(),
      pageToken:form.value.pageToken.trim(),
      pageId:form.value.pageId.trim(),
      API_KEY:form.value.API_KEY.trim(),
      API_KEY_SECRET:form.value.API_KEY_SECRET.trim(),
      ACCESS_TOKEN:form.value.ACCESS_TOKEN.trim(),
      ACCESS_TOKEN_SECRET:form.value.ACCESS_TOKEN_SECRET.trim(),
      msg:form.value.message.trim()
    }
    console.log(data)
    this.http.post<any>(environment.API+'sendall',data).subscribe(
      {
        next: (res :any)=> {
          this.loading = false
          this.sncakbar.open("Message Send",undefined,{duration:3000,panelClass:['alert','alert-success','bg-success']});
          form.resetForm()
        },
        error: (err:any) =>{
          this.loading = false
          
          this.sncakbar.open("Message send Failed",undefined,{duration:3000,panelClass:['alert','alert-danger','bg-danger']});
          form.resetForm()

        }
      }
      
      
    )

  }


}
