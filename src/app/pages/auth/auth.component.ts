import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public showBackButton: boolean = false;
  constructor(
    public _routerService: Router
  ) {}

  ngOnInit(): void {
    this.showBackButton =
      this._routerService.url == '/login/esqueci-minha-senha';
  }


 
}
