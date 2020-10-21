import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl + "sanphams/";

@Injectable({
  providedIn: 'root'
})

export class SanPhamService {
    constructor(
        private _http: HttpClient
    ) { }

    getAll() {
        return this._http
            .get<any>(baseUrl, { headers: environment.headerOptions });
    }

    getTheoLoai(idloai) {
        return this._http
            .get<any>(baseUrl + "get-loai/" + idloai, { headers: environment.headerOptions });
    }

    getTheoId(id) {
        return this._http
            .get<any>(baseUrl + id, { headers: environment.headerOptions });
    }
    getTheoLoaiTop4(idloai) {
        return this._http
            .get<any>(baseUrl + "get-loai-top4/" + idloai, { headers: environment.headerOptions });
    }
    getTheoLoaiTop6(idloai) {
        return this._http
            .get<any>(baseUrl + "get-loai-top6/" + idloai, { headers: environment.headerOptions });
    }

    getTimKiem(key) {
        let params = new HttpParams()
        .set("key", key);
        return this._http
            .get<any>(baseUrl + "tim-kiem", { params: params });
    }
}