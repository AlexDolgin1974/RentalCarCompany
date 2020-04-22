import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardManagerService implements CanActivate {

  constructor(private router: Router) { }


  public canActivate(): boolean {

    if (sessionStorage.getItem("Status") == "מנהל")
      return true;
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
