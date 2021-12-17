import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import users from '../user.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading =false;
  constructor(private snackbar:MatSnackBar,private router:Router) { }


  ngOnInit(): void {
  }
  register(form:NgForm):any{
    this.loading=true
    let data = {
      email:form.value.email.trim(),
      password:form.value.password.trim(),
      name:form.value.name.trim(),
    }
    if(form.value.confirmPassword.trim() !== data.password){
      this.loading=false
      return this.snackbar.open('Password mismatch',undefined,{duration:3000,panelClass:['alert','alert-danger','bg-danger']})
    }
    if(users.some(el => el.email === data.email)){
      return  this.snackbar.open('User already exist',undefined,{duration:3000,panelClass:['alert','alert-danger','bg-danger']})
    }
    users.push(data)
    this.loading = false
    form.resetForm()
    
    this.snackbar.open('User Registered',undefined,{duration:3000,panelClass:['alert','alert-success','bg-success']})
    
  }
}
