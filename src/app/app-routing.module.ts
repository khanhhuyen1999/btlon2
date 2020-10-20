import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ListItemComponent} from './product/list-item/list-item.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import { DetailComponent } from './product/detail/detail.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { GiohangComponent } from './giohang/giohang.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
    { path: '',component: HomeComponent },
    {path: 'list-item/:id', component: ListItemComponent},
    {path: 'tim-kiem', component: SearchComponent},
     {path: 'detail/:id', component: DetailComponent},
     { path: 'lienhe',component: LienheComponent },
     { path: 'gioithieu',component: GioithieuComponent },
     { path: 'dangnhap',component: DangnhapComponent },
     { path: 'thanhtoan',component: ThanhtoanComponent },
     { path: 'giohang',component: GiohangComponent },
     {path: '', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)  },
     {path: 'search', loadChildren:() => import('./search/search.module').then(m => m.SearchModule)  },
     {path: 'product', loadChildren:() => import('./product/product.module').then(m => m.ProductModule)  },
     {path: 'lienhe', loadChildren:() => import ('./lienhe/lienhe.module' ).then(m => m.LienheModule)  },
     {path: 'gioithieu', loadChildren:() => import ('./gioithieu/gioithieu.module' ).then(m => m.GioithieuModule)  },
     {path: 'dangnhap', loadChildren:() => import ('./dangnhap/dangnhap.module' ).then(m => m.DangnhapModule)  },
     {path: 'thanhtoan', loadChildren:() => import ('./thanhtoan/thanhtoan.module' ).then(m => m.ThanhtoanModule)  },
     {path: 'giohang', loadChildren:() => import ('./giohang/giohang.module' ).then(m => m.GiohangModule)  },
     {path: 'search', loadChildren:() => import ('./search/search.module' ).then(m => m.SearchModule)  },
     {path: '**', component: NotFoundComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
