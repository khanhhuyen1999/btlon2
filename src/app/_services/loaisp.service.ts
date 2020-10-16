import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl + "LoaiSps";

@Injectable({
  providedIn: 'root'
})

export class LoaiSpService {
    constructor(
        private _http: HttpClient
    ) { }

    getAll() {
        return this._http
            .get<any>(baseUrl, { headers: environment.headerOptions });
    }

    create(user) {
        return this._http
            .post(baseUrl + "/register", user, { headers: environment.headerOptions });
    }
}