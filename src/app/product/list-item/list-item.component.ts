import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SanPhamService } from 'src/app/_services/sanpham.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  list: any;

  constructor(
    private route: ActivatedRoute,
    private sanphamService: SanPhamService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const idloai = param['id'];

      if(idloai) {
        this.sanphamService.getTheoLoai(idloai).toPromise()
        .then(res => {
          this.list = res;
        })
        .catch(err => console.error(err));
      }
    });
  }

}
