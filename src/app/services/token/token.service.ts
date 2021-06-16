import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  decodedToken: any;
  //Enregitrement du Token dans le local Storage
  set(data) {
    const {token,id} = data;
    console.log(data)
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
  } 
  setId(id:string){
    localStorage.setItem('id', id);
  }

  handle(data) {
    this.set(data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getId() {
    return localStorage.getItem('id');
  }

  remove() {
    localStorage.removeItem('token');
  }

  decode(payload) {
    //console.log('payload : ', payload);
    return JSON.parse(atob(payload));
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }


  isValid() {
    const token = this.getToken();
    const id = this.getId();

    if (token) {

      const payload = this.payload(token);
      if (payload) {
        return id == payload.user.id;
      }
    }
    return false;
  }

  getInfos() {

    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }

    return null
  }


  loggedIn() {
    return this.isValid();
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
  getExpiryTime() {
    this.decodedToken=this.getInfos();
    return this.decodedToken ? this.decodedToken.exp : null;
  }
}
