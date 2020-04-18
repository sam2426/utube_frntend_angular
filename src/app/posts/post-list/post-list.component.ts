import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/sevices/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  // posts=[
    //   {title:"First Post", content:"This is my First Post."},
    //   {title:"Second Post", content:"This is my Second Post."},
    //   {title:"Third Post", content:"This is my Third Post."}
    // ];

  // @Input() posts:Post[]=[];

  posts:Post[]=[];
  dataRetriever:Subscription;

  constructor(private postService:PostService){}

  ngOnInit(){
    this.dataRetriever = this.postService.getPostUpdateListener().subscribe((data:Post[])=>{
      this.posts=data;
    })
  }

  ngOnDestroy(){
    this.dataRetriever.unsubscribe();
  }
}
