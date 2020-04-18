import { Component, EventEmitter, Output} from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/sevices/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  @Output() postcreated = new EventEmitter<Post>();
  enteredTitle:string='';
  enteredContent:string='';

  constructor(private postService:PostService) { }

  onAddPost(form:NgForm){
    if(form.invalid){
      return;
    }
    // const post:Post={
    //   title:form.value.title,
    //   content:form.value.content
    // }
    // this.postcreated.emit(post);

    const title=form.value.title;
    const content=form.value.content;
    this.postService.addPosts(title, content)
    form.resetForm();
  }

}
