import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import {
  getBlogSelector,
  getBlogSelectorUsingId
} from 'src/app/shared/store/blog/blog.selectors';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { deleteBlog } from 'src/app/shared/store/blog/blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogsList!: BlogModel[];

  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}

  ngOnInit() {
    this.store.select(getBlogSelector).subscribe(data => {
      this.blogsList = data;
      //console.log(data);
    });
  }

  onAddBlog() {
    this.openDialog(0, 'Add Blog', false);
  }
  openDialog(id: number, dialogBoxTitle: string, isEdit: boolean) {
    this.dialog.open(AddBlogComponent, {
      width: '60%',
      data: { id: id, dialogBoxTitle: dialogBoxTitle, isEdit: isEdit }
    });
  }

  onUpdate(id: number) {
    this.openDialog(id, 'Edit Blog', true);
  }

  onDelete(id: number) {
    this.store.dispatch(deleteBlog({ blogToBeDeleted: id }));
  }
}
