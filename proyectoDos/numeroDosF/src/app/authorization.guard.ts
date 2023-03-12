import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorizationService } from './services/authorization.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(
    private authorization: AuthorizationService,
    private router: Router){

  }

  canActivate(): boolean {
    if (this.authorization.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }


}
