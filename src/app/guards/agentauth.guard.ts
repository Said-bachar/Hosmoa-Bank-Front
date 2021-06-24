import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AgentAuthGuard implements CanActivate {
  constructor(
    private token: TokenService,
    private userService: UserService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.token.loggedIn()) {
        this.router.navigateByUrl('/agent-login');
        this.token.remove();
        this.userService.changeAuthStatus(false);
        return false;
      }
    return true;
  }
  
}
