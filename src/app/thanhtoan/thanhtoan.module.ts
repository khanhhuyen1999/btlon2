import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThanhtoanComponent } from './thanhtoan.component';
const routes: Routes = [
  { path: 'thanhtoan',component: ThanhtoanComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ThanhtoanModule { }
