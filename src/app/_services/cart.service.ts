import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { SanPhamService } from './sanpham.service';

const baseUrl = environment.apiUrl + "HoaDonBans/";

@Injectable({
  providedIn: 'root'
})

export class CartService {
    cart: any[];

    constructor(
        private _http: HttpClient,
        private sanPhamService: SanPhamService,
        private toastr: ToastrService
    ) {
        this.loadGioHang();
    }

    themVaoGio(id) {
        let sanpham = this.cart.find(sp => sp.maSp == id);

        if(sanpham) {
            sanpham.soLuong++;
            this.luuGioHang();
        } else {
            this.sanPhamService.getTheoId(id)
            .subscribe(res => {
                res.soLuong = 1;
                this.cart.push(res);
                this.luuGioHang();
            });
        }
        this.toastr.success('Thành công', 'Đã thêm sản phẩm vào giỏ hàng!');
    }

    xoaGioHang(id) {
        let sanpham = this.cart.find(sp => sp.maSp == id);

        if(sanpham) {
            this.cart = this.cart.filter(sp => sp.maSp != id);
            this.luuGioHang();
            this.toastr.success('Thành công', 'Đã xóa sản phẩm khỏi giỏ hàng!');
        } else {
            this.toastr.error('Thất bại', 'Không tìm thấy sản phẩm!');
        }
    }

    thayDoiSoLuong(id, soLuong) {
        let sanpham = this.cart.find(sp => sp.maSp == id);

        if(sanpham) {
            sanpham.soLuong = soLuong;
            this.luuGioHang();
        }
    }

    loadGioHang() {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        if(this.cart == undefined)
            this.cart = [];
    }

    luuGioHang() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    thanhToan(data) {
        return this._http
            .post(baseUrl, data, { headers: environment.headerOptions });
    }
}