import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaiSpService } from 'src/app/_services/loaisp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  list_lsp: any;
  form: any;

  constructor(
    private loaiSpService: LoaiSpService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loaiSpService.getAll().toPromise()
    .then(res => {
      this.list_lsp = res;
    });

    this.form = this.formBuilder.group({
      key_name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/tim-kiem'], { queryParams: { key: this.form.value.key_name } });
  }

}
