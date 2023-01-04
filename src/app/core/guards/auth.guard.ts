
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CoreBase } from '../models/coreBase';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends CoreBase implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private _spinnerService: NgxSpinnerService
  ) {
    super();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isNotEmpty(this._authService.getToken())) {
      return true;
    } else {
      this._toastrService.error('', 'Sua sessão será encerrada');
      this._spinnerService.show();
      setTimeout(() => {
        this._router.navigate(['login']);
        this._spinnerService.hide();
      }, 1000);
      return false;
    }
  }
}
