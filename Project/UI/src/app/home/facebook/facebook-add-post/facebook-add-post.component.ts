import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-facebook-add-post',
  templateUrl: './facebook-add-post.component.html',
  styleUrls: ['./facebook-add-post.component.css']
})
export class FacebookAddPostComponent implements OnInit {
  public loading = false;
  constructor(private http:HttpClient,private sncakbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  addPost(form:NgForm){
    this.loading = true
    let data = {
      pageToken:form.value.pageToken.trim(),
      pageId:form.value.pageId.trim(),
      msg:form.value.message.trim()
    }
    this.http.post<any>(environment.API+'facebook',data).subscribe(
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
