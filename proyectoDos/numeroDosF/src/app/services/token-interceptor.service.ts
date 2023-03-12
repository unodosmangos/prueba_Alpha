import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthorizationService } from './authorization.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authorization: AuthorizationService) { }


  intercept(req:any, next:any){
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authorization.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }

}
