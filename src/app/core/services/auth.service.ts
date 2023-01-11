import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  public onClose: any;
  constructor(
    private _routerService: Router,    
    private _spinnerService: NgxSpinnerService,
    private _toastrService: ToastrService,
  ) {
    this.onClose = new Subject();
  }

  public async login(params: any): Promise<void> {
    this._spinnerService.show();   
    this.setToken();
    this._routerService.navigate(['/home']);
    this._spinnerService.hide();
  }

  public async updatePassword(params: any): Promise<void> {}

  public async recoveryPassword(params: any): Promise<void> {}
 

  public logout(err?: any): void {
    if (err) {
      this._toastrService.error('Sessão Expirada', 'Sua sessão será encerrada');
      this.onClose.next(false);
    }
    this.removeToken();
    this._routerService.navigate(['login']);
    this._spinnerService.hide();
  }

  public getToken(): string {
    return sessionStorage.getItem('tokenName') || '';
  }

  public tokenStillValid(){
    const token = this.getToken();
    if (token) {
      const dateLimit = new Date(JSON.parse(token));
      const actualDate = new Date();
      if (actualDate > dateLimit) {
        return false;
      }
    } else {
      return false;
    }
    return true;
  }

  public setToken(): void {
    var token = new Date();
    token.setMinutes(token.getMinutes() + 5);
    sessionStorage.setItem('tokenName', JSON.stringify(token));
  }

  public removeToken(): void {
    sessionStorage.removeItem('tokenName');
  }
}
