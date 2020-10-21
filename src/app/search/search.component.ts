import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SanPhamService } from '../_services/sanpham.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list: any;
  key: string;

  constructor(
    private route: ActivatedRoute,
    private sanphamService: SanPhamService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get("key");
      
      if(key) {
        this.sanphamService.getTimKiem(key).toPromise()
        .then(res => {
          this.list = res;
        })
        .catch(err => console.error(err));
      }
    });
  }

}
