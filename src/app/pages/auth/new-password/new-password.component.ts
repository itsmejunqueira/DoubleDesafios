
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import validations from './Validations';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  public validations = validations;
  form!: FormGroup;
  public showpass: boolean = false;
  public showConfirmpass: boolean = false;
  templateIsValid!: boolean;
  errorMessage: any;
  dialogRef: any;
  onClose: any;

  constructor(
    private fb: FormBuilder,
    private _spinnerService: NgxSpinnerService,
    private _toastrService: ToastrService,
    private _authService: AuthService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  eyeOpen() {
    this.showpass = !this.showpass;
  }

  eyeOpenConfirmation() {
    this.showConfirmpass = !this.showConfirmpass;
  }

  loadForm() {
    this.form = this.fb.group({
      newPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
          ),
        ]),
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
          ),
        ]),
      ],
      recoveryKey: [this.route.snapshot.params['id'], Validators.required],
    });
  }

  validator(password: string, validation: any): any {
    let objReturn = false;
    if (!password) return objReturn;
    switch (validation) {
      case this.validations[0]:
        objReturn = password.length >= 8 ? true : false;
        break;
      case this.validations[1]:
        objReturn = /[A-Z]/.test(password) ? true : false;
        break;
      case this.validations[2]:
        objReturn = /[a-z]/.test(password) ? true : false;
        break;
      case this.validations[3]:
        objReturn = /\d/.test(password) ? true : false;
        break;
      case this.validations[4]:
        objReturn = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
          ? true
          : false;
        break;
      default:
        break;
    }
    return objReturn;
  }

  public async save() {
    this._spinnerService.show();
    await this._authService.recoveryPassword(this.form.value);
    this._toastrService.success('Senha alterada com sucesso!');
    this._spinnerService.hide();
    this.router.navigate(['/']);
  }
}
