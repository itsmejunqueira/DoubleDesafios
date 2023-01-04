import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private firstMessage: boolean = true;

  constructor(
    private _authService: AuthService,
    private _routerService: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        
        if ([401, 403].includes(err.status)) {
          this._authService.logout(true);
          this._routerService.navigate(['/login']);
        }
        return throwError(() => {
          new Error(err);
        });
      })
    );
  }
}
