import { Component, Input } from '@angular/core';
import { Post } from './model/post';
import { PostService } from './posts.service';


@Component({
    templateUrl: '/app/posts/posts.component.html',

})
export class PostsComponent {
    @Input() post: Post;
    posts: Post[];

    constructor(private pcs: PostService) {  }

    ngOnInit() {

        console.log(this.pcs.getPosts());
        debugger;
        this.pcs.getPosts().subscribe((posts) => this.posts = posts);
    }
}