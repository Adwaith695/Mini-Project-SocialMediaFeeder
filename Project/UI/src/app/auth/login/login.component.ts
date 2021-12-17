import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import users from '../user.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading =false;
  constructor(private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    this.loading=true
    let data = {
      email:form.value.email.trim(),
      password:form.value.password.trim()
    }
    users.forEach((user)=>{
      if(data.email !== user.email || data.password !== user.password){
        this.snackbar.open('Email or Password is wrong',undefined,{duration:3000,panelClass:['alert','alert-danger','bg-danger']})
      }else{
        localStorage.setItem('user',JSON.stringify({email:user.email,name:user.name}));
        this.router.navigate(['/'])
      }
      this.loading = false
    }) 
    
  }

}
