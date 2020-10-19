import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanPhamService } from 'src/app/_services/sanpham.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:number;
  sanpham: any;
  
  constructor(
    private route: ActivatedRoute,
    private sanphamService: SanPhamService
  ) { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.sanphamService.getTheoId(this.id).toPromise()
      .then(res => {
        this.sanpham = res;
      })
      .catch(err => console.error(err));
    }
  }

}
