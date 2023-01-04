import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { AddressComponent } from './pages/custumers/address/address.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
  },
  {
    path: 'customer',
    component: AddressComponent,
    canActivate: [],
  },
  {
    path: 'coursedetails',
    component: CourseDetailsComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
