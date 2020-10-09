import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GiohangComponent } from './giohang.component';

const routes: Routes = [
  { path: 'giohang',component: GiohangComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class GiohangModule { }
