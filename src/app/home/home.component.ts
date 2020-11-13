import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { SanPhamService } from "../_services/sanpham.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = [];
  list1 = [];
  list2 = [];
  list3 = [];
  list4 = [];
  list5 = [];

  constructor(
    private SanPhamService:SanPhamService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.SanPhamService.getAll().subscribe(data => {
      this.list = data;
    });
    this.SanPhamService.getTheoLoaiTop4(1).subscribe(data => {
      this.list1 = data;
    });
    this.SanPhamService.getTheoLoaiTop4(2).subscribe(data => {
      this.list2 = data;
    });
    this.SanPhamService.getTheoLoaiTop4(3).subscribe(data => {
      this.list3 = data;
    });
    this.SanPhamService.getTheoLoaiTop4(4).subscribe(data => {
      this.list4 = data;
    });
    this.SanPhamService.getTheoLoaiTop4(5).subscribe(data => {
      this.list5 = data;
    });
  }

  themVaoGio(event, sanpham) {
    this.cartService.themVaoGio(sanpham.maSp);
    event.preventDefault();
    event.stopPropagation();
  }
 
}
