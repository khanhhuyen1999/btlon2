import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      TenKh: ['', Validators.required],
      Email: ['', Validators.required],
      SDT: ['', Validators.required],
      DiaChi: ['', Validators.required],
    });
  }
  
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    let khachHang = {
      TenKh: this.form.value.TenKh,
      Email: this.form.value.Email,
      Sdt: this.form.value.SDT,
      DiaChi: this.form.value.DiaChi,
    }

    let cart = this.cartService.cart;
    
    cart = cart.map(c => {
      return {
        MaSp: c.maSp,
        SoLuong: c.soLuong,
        DonGia: c.gia,
      };
    });

    this.cartService.thanhToan({
      khachHang,
      chiTiet: cart,
    })
    .subscribe(res => {
      console.log(res);
    });
  }
}
