import { Component, OnInit } from '@angular/core';
import { SanPhamService } from "../_services/sanpham.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = [];

  constructor(private SanPhamService:SanPhamService) { }

  ngOnInit(): void {
    this.SanPhamService.getAll().subscribe(data => {
      this.list = data;
      console.log(data)
    })
  }

}
