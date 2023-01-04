import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestsService {
  constructor(private _httpService: HttpClient) {}

  // public getAll(endpoint: string): {
  //  return this._httpService.get(`${environment.api.server}${endpoint}`);
  // }

  // public get(endpoint: string, parameters: TrequestParams[]): Observable<any> {
  //   let options = {
  //     params: new HttpParams(),
  //   };
  //   parameters.forEach((element: TrequestParams) => {
  //     options.params = options.params.append(
  //       element.key,
  //       String(element.value)
  //     );
  //   });

    // return this._httpService.get(
    //   `${environment.api.server}${endpoint}`,
    //   options
    // );
  //}

  // public create(endpoint: string, body: any): Observable<any> {
  //   return this._httpService.post(`${environment}${endpoint}`, body);
  // }

  // public update(endpoint: string, body: any): Observable<any> {
  //   return this._httpService.put(`${environment}${endpoint}`, body);
  // }

  // public uploadFiles(endpoint: string, body: any): Observable<any> {
  //   return this._httpService.put(`${environment}${endpoint}`, body);
  // }

  // public uploadPdf(endpoint: string, body: any): Observable<any> {
  //   return this._httpService.post(`${environment}${endpoint}`, body);
  // }

  // public delete(endpoint: string, body: TrequestParams[]): Observable<any> {
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //     body: body,
  //   };

  //   // return this._httpService.delete(
  //   //   `${environment.api.server}${endpoint}`,
  //   //   options
  //   // );
  // }

  // public error(message: string = '') {
  //   return throwError(() => {
  //     const error: any = new Error(message);
  //     return error;
  //   });
  // }

  // public getAddressByZipCode(zipcode: string): Observable<any> {
  //   return this._httpService.get(`https://viacep.com.br/ws/${zipcode}/json/`);
  // }

  // public sendCaptchaToken(captcha: string): Observable<any> {
  //   return this._httpService.post<any>(
  //     `${environment.api.server}${environment.api.endpoints.account.validateRecaptcha.endpoint}`,
  //     {
  //       captcha,
  //     }
  //   );
  // }
}
