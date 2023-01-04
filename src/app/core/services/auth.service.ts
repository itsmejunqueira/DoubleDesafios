import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { lastValueFrom, Subject } from 'rxjs';
import { RequestsService } from 'src/app/core/services/request.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  public onClose: any;
  constructor(
    private _requestService: RequestsService,
    private _routerService: Router,    
    private _spinnerService: NgxSpinnerService,
    private _toastrService: ToastrService,
  ) {
    this.onClose = new Subject();
  }

  public async login(params: any): Promise<void> {
    this._spinnerService.show();

    // const result = await lastValueFrom(
    //   this._requestService.create(
    //     environment.endpoints.account.authenticate.endpoint,
    //     params
    //   )
    // );
    //this.setToken(result.token);
    
    this._routerService.navigate(['/home']);
    this._spinnerService.hide();
  }

  public async updatePassword(params: any): Promise<void> {
    // await lastValueFrom(
    //   this._requestService.update(
    //     environment.api.endpoints.account.updatePassword.endpoint,
    //     params
    //   )
    // );
  }
  // public async sendCaptchaToken(token: string): Promise<void> {
  //   return await lastValueFrom(this._requestService.sendCaptchaToken(token));
  // }

  public async recoveryPassword(params: any): Promise<void> {
    // await lastValueFrom(
    //   this._requestService.update(
    //     environment.api.endpoints.account.recoveryPassword.endpoint,
    //     params
    //   )
    // );
  }
 

  public logout(err?: any): void {
    if (err) {
      this._toastrService.error('Sessão Expirada', 'Sua sessão será encerrada');
      this.onClose.next(false);
      //this.bsModalRef.hide();
    }
    this.removeToken();
    this._routerService.navigate(['login']);
    this._spinnerService.hide();
  }

  public getToken(): string {
    return sessionStorage.getItem('tokenName') || '';
  }

  public setToken(token: any): void {
    sessionStorage.setItem('tokenName', token);
  }

  public removeToken(): void {
    sessionStorage.removeItem('tokenName');
  }
}
