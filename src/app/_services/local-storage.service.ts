import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  store: Object = {};

  constructor() { }

  private get localStorageExists() {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  get(key: string): string|null {
    if (this.localStorageExists) {
      return window.localStorage.getItem(key);
    } else {
      return this.store[key] || null;
    }
  }

  set(key: string, value: any) {
    if (this.localStorageExists) {
      return window.localStorage.setItem(key, value);
    } else {
      return this.store[key] = JSON.stringify(value);
    }
  }

  remove(key: string) {
    if (this.localStorageExists) {
      return window.localStorage.removeItem(key);
    } else {
      return delete this.store[key];
    }
  }
}
