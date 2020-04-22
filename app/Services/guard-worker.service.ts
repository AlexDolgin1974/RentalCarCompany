import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardWorkerService implements CanActivate {

  constructor(private router: Router) { }


  public canActivate(): boolean {

    if (sessionStorage.getItem("Status") == "עובד")
      return true;
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
