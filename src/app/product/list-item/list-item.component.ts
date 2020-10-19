import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanPhamService } from 'src/app/_services/sanpham.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  list: any;
  idloai: number;

  constructor(
    private route: ActivatedRoute,
    private sanphamService: SanPhamService
  ) { }

  ngOnInit(): void {
    this.idloai = this.route.snapshot.params['id'];

    if(this.idloai) {
      this.sanphamService.getTheoLoai(this.idloai).toPromise()
      .then(res => {
        this.list = res;
      })
      .catch(err => console.error(err));
    }
  }

}
