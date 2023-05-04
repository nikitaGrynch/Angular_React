import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
constructor(private _authService: AuthService, private _router: Router) {}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  const token = this._authService.getToken();
  if (token) {
    return true;
  } else {
    this._router.navigate(['/home']);
    return false;
  }
}
}