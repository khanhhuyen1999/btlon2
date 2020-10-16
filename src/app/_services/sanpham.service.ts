import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl + "sanphams";

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
}