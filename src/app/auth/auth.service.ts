import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggenIn: boolean = false;
  constructor() { }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.isLoggenIn)
      }, 800);
    });
    return promise;
  }
  loggedIn() {
    this.isLoggenIn = true;
  }

  loggedOut() {
    this.isLoggenIn = false;
  }
}
