import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {  
  public formLogin = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),   
  });


  constructor(private _authService: AuthService,
    private readonly router: Router,) {}

  ngOnInit(): void {}

  public async submit() {
    if (this.formLogin.invalid) {
      return;
    }
    this.router.navigate(['login']);
     await this._authService.login(this.formLogin.value);
  }
}
