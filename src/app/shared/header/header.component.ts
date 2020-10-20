import { Component, OnInit } from '@angular/core';
import { LoaiSpService } from 'src/app/_services/loaisp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  list_lsp: any;

  constructor(
    private loaiSpService: LoaiSpService
  ) { }

  ngOnInit(): void {
    this.loaiSpService.getAll().toPromise()
    .then(res => {
      this.list_lsp = res;
    })
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/danh-muc'], { queryParams: { id: this.form.value.type, key: this.form.value.key_name } });
  }
}
