import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
//import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  { path: '',component: HomeComponent }
]


@NgModule({
  declarations: [
    //SlideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ]
})
export class HomeModule { }
