import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.model';
import { addBlog } from 'src/app/shared/store/blog/blog.actions';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent {
  constructor(
    private dialogRef: MatDialogRef<AddBlogComponent>,
    private blogFormBuilder: FormBuilder, private store:Store<AppStateModel>
  ) {}

   blogForm=this.blogFormBuilder.group({
    id:this.blogFormBuilder.control(0),
    title:this.blogFormBuilder.control('',Validators.required),
    description:this.blogFormBuilder.control('',Validators.required),
   });

   onSave() {
    if(this.blogForm.valid){
      const blogInp: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      };
      this.store.dispatch(addBlog({blogInput:blogInp}));
      this.dialogRef.close();
    }


  }
  onClose() {
    this.dialogRef.close();
  }

  

  
}
