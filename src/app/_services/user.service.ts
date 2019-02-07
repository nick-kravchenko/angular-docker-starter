import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_typings/user';
import { LocalStorageService } from './local-storage.service';

const backend = 'http://localhost:3333';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  jwt: string|null = null;
  data: User = {
    id: 0,
    email: '',
    created_at: '',
    updated_at: '',
  };
  init: Function = () => {
    if (typeof window !== 'undefined') {
      this.jwt = this.localStorage.get('jwt') || null;
      if (this.isLoggedIn()) this.loadUser();
    }
  };
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
  ) {}
  loadUser() {
    this.http.get<User>(`${backend}/auth/me`).subscribe(
      (response: User) => {
        this.data = response;
      },
      (error) => {
        console.error(error);
      },
    );
  }
  login(credentials) {
    return this.http.post(`${backend}/auth/login`, credentials).subscribe(
      (response: any) => {
        this.jwt = response.token;
        this.localStorage.set('jwt', this.jwt);
        this.loadUser();
      },
      (error) => {
        // this.router.navigate(['/sign-up/success']);
        // console.error(error)
      }
    );
  }
  register(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${backend}/auth/register`, credentials).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  isLoggedIn() {
    return !!this.jwt;
  }
  logout() {
    return new Promise((resolve, reject) => {
      this.localStorage.remove('jwt');
      this.data = undefined;
      this.jwt = null;
    });
  }
}
