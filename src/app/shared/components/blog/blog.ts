import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  imports: [
    TranslatePipe
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit{
  posts: BlogPost[] = [];

  ngOnInit(): void {
    fetch('assets/data/blog-posts.json')
      .then(res => res.json())
      .then(data => this.posts = data);
  }
}
