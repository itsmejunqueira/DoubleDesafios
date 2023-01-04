import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {

  constructor( private _authService: AuthService,) {}

  ngOnInit(): void {}


  public async logout(): Promise<void> {
    this._authService.logout();
  }
}
