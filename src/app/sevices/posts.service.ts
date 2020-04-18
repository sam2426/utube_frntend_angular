import { Injectable, EventEmitter } from '@angular/core';
import { Post } from '../posts/post.model';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class PostService{
  private posts:Post[]=[];

  private postsUpdated= new Subject<Post[]>();

  getPosts(){
    return [...this.posts];
  }

  addPosts(title:string, content:string){
    const post:Post={title,content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

}
