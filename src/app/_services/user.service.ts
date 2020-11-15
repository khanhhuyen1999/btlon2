import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const baseUrl = environment.apiUrl + "KhachHangs/";

@Injectable({
  providedIn: 'root'
})

export class UserService {
    private userSubject: BehaviorSubject<any>;
    public user: Observable<any>;
    
    constructor(
        private _http: HttpClient,
        private _router: Router
    ) {
        this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): any {
        return this.userSubject.value;
    }

    login(email: string, password: string) {
        return this._http.post<any>(baseUrl + "login", {
            TaiKhoan: email,
            Password: password
        }, { headers: environment.headerOptions })
        .pipe(map(data => {
            data.user.token = data.token;

            localStorage.setItem('user', JSON.stringify(data.user));
            this.userSubject.next(data.user);
            
            return data.user;
        }));
    }

    logout() {
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this._router.navigate(['/login']);
    }
}