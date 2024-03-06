import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogSelector } from 'src/app/shared/store/blog/blog.selectors';
import { AddBlogComponent } from './add-blog/add-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogsList!:BlogModel[];
  constructor(private store:Store<AppStateModel>,private dialog:MatDialog){}

  ngOnInit(){
    this.store.select(getBlogSelector).subscribe(data=>{
      this.blogsList = data;
      console.log(data);
    })
  }

  onAddBlog(){
    this.openDialog();
  }
  openDialog(){
    this.dialog.open(AddBlogComponent,{width:'60%'})
  }

}
