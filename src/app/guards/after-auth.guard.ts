import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterAuthGuard implements CanActivate {
  constructor(
    private token:TokenService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.token.loggedIn()){
        this.router.navigateByUrl("/");
        return false;
      }
      return true;
  }
  
}
