import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpDataHandlerService } from './shared/services/http-dataHandler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private httpServe : HttpDataHandlerService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.httpServe.checkAuthentication().then((res:any)=>{
        if(res){
          return true
        }else{
          alert("Please Login to Access the Restricted Contents!!")
          this.router.navigate(['/login'])
          return false;
        }
      })

  }
  
}
