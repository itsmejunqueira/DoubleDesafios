import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent, children: [], canActivate: [] },
      {
        path: 'esqueci-minha-senha',
        component: ForgotPasswordComponent,
        children: [],
        canActivate: [],
      },
      {
        path: 'recovery-password/:id',
        component: NewPasswordComponent,
        children: [],
        canActivate: [],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
