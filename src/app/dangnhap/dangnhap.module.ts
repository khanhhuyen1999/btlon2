import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap.component';

const routes: Routes = [
  { path: 'dangnhap',component: DangnhapComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class DangnhapModule { }
