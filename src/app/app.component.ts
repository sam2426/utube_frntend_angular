import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanCrs';
  storedPost:Post[]=[];

  onPostCreated(eventData:Post){
    this.storedPost.push(eventData);
  }
}
