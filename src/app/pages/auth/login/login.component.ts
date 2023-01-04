import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public show_eye: boolean = false;

  public formLogin = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });


  constructor(
    private _authService: AuthService,
  ) {}

  ngOnInit(): void {}

  public async submit() {
    if (this.formLogin.invalid) {
      return;
    }
    await this._authService.login(this.formLogin.value);
  }
}
