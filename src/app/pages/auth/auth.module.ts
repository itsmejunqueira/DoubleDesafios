import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NewPasswordComponent } from 'src/app/pages/auth/new-password/new-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    NewPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [AuthRoutingModule, SharedModule],
  providers: [
    
  ],
})
export class AuthModule {}
