import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-twitter-trending',
  templateUrl: './twitter-trending.component.html',
  styleUrls: ['./twitter-trending.component.css']
})
export class TwitterTrendingComponent implements OnInit {
  posts:any =[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadPosts()
  }
  loadPosts(){
    this.http.get<any>(environment.API+'trending').subscribe(
      {
        next: (res :any)=> {
          this.posts = res.data[0].trends
        },
         
      }
      
      
    )
    
  }

}
