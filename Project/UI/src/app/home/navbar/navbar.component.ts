import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  user:any= {
    name: '',
    email:''
  }
  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.user = JSON.parse(localStorage.getItem('user') as string)
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
