import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBlog } from 'src/app/shared/store/blog/blog.actions';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogSelector } from 'src/app/shared/store/blog/blog.selectors';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogsList!:BlogModel[];
  constructor(private store:Store<{blog:BlogModel[]}>){}

  ngOnInit(){
    this.store.select(getBlogSelector).subscribe(data=>{
      this.blogsList=data;
    })
  }

}
