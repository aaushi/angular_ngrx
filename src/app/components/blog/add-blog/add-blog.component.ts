import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import { addBlog, updateBlog } from 'src/app/shared/store/blog/blog.actions';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogSelectorUsingId } from 'src/app/shared/store/blog/blog.selectors';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent {
  constructor(
    private dialogRef: MatDialogRef<AddBlogComponent>,
    private blogFormBuilder: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  blogDetailsSelectedToEdit!: any;
  idSelectedBlog!: any;
  pageTitle!: string;
  toEditData!: BlogModel;
  blogForm = this.blogFormBuilder.group({
    id: this.blogFormBuilder.control(0),
    title: this.blogFormBuilder.control('', Validators.required),
    description: this.blogFormBuilder.control('', Validators.required)
  });

  onSave() {
    if (this.blogForm.valid) {
      const blogInp: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      };
      if (this.data.isEdit===true) {
        blogInp.id = this.data.id; 
        this.store.dispatch(updateBlog({ blogInput: blogInp }));
      } else {
        this.store.dispatch(addBlog({ blogInput: blogInp }));
      }

      this.dialogRef.close();
    }
  }
  onClose() {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data);
    this.pageTitle = this.data.dialogBoxTitle;
    this.store.select(getBlogSelectorUsingId(this.data.id)).subscribe(data => {
      this.toEditData = data;
      this.blogForm.setValue({
        id: this.toEditData.id,
        title: this.toEditData.title,
        description: this.toEditData.description
      });
    });
  }
}
