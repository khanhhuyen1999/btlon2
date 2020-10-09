import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GioithieuComponent } from './gioithieu.component';
//import { SlideComponent } from './slide/slide.component';


const routes: Routes = [
  { path: 'gioithieu',component: GioithieuComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class GioithieuModule { }
