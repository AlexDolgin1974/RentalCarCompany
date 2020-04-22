import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardClientService implements CanActivate  {
  constructor(private router: Router) { }


  public canActivate(): boolean {

    if (sessionStorage.getItem("Status") == "לקוח")
      return true;
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
