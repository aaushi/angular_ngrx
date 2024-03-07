import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    
  ]
})
export class MaterialModule {}
