import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-twitter-view-twit',
  templateUrl: './twitter-view-twit.component.html',
  styleUrls: ['./twitter-view-twit.component.css']
})
export class TwitterViewTwitComponent implements OnInit {

  post:any = {}
  message:any ='';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadPosts()
  }
  loadPosts(){
    this.http.get<any>(environment.API+'twitter').subscribe(
      {
        next: (res :any)=> {
          try{

            this.post =JSON.parse(res.data)
          }catch(e){
            this.message = "no data"
          }
        }
         
      }
      
      
    )
    
  }
}
