import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetImagePipe } from '../_pipe/getimage.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GetImagePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetImagePipe,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
