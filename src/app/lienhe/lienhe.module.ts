import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LienheComponent } from './lienhe.component';

const routes: Routes = [
  { path: 'lienhe',component: LienheComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ]
})
export class LienheModule { }
