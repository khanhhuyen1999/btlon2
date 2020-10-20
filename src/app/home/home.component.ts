import { Component, OnInit } from '@angular/core';
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
  form: any;
  router: any;

  constructor(private SanPhamService:SanPhamService) { }

  ngOnInit(): void {
    this.SanPhamService.getAll().subscribe(data => {
      this.list = data;
      console.log(data)
    });
    this.SanPhamService.getTheoLoaiTop4(1).subscribe(data => {
      this.list1 = data;
      console.log(data)
    });
    this.SanPhamService.getTheoLoaiTop4(2).subscribe(data => {
      this.list2 = data;
      console.log(data)
    });
    this.SanPhamService.getTheoLoaiTop4(3).subscribe(data => {
      this.list3 = data;
      console.log(data)
    });
    this.SanPhamService.getTheoLoaiTop4(4).subscribe(data => {
      this.list4 = data;
      console.log(data)
    });
    this.SanPhamService.getTheoLoaiTop4(5).subscribe(data => {
      this.list5 = data;
      console.log(data)
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/danh-muc'], { queryParams: { id: this.form.value.type, key: this.form.value.key_name } });
  }

}
