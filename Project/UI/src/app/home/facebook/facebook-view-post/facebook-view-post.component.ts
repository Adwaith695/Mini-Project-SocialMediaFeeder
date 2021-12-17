import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-facebook-view-post',
  templateUrl: './facebook-view-post.component.html',
  styleUrls: ['./facebook-view-post.component.css']
})
export class FacebookViewPostComponent implements OnInit {
  posts:any =[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadPosts()
  }
  loadPosts(){
    this.http.get<any>(environment.API+'facebook').subscribe(
      {
        next: (res :any)=> {
          this.posts = res.data.data
        },
         
      }
      
      
    )
  }

}
