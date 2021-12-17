import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {

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
      msg:form.value.message.trim()
    }
    console.log(data)
    this.http.post<any>(environment.API+'whatsapp',data).subscribe(
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
