import {Injectable} from '@angular/core';
import {LoginService} from '../services/login.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (this.loginService.tokenSecret !==''){
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }
}
