import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthService } from '../core/services/auth.service';
import {  HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './components/navigation/main-nav/main-nav.component';
import { MenuDropdownComponent } from './components/navigation/menu-dropdown/menu-dropdown.component';


@NgModule({
  declarations: [
    MainNavComponent,  
    MenuDropdownComponent,
    ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,        
    NgxSpinnerModule,
    MainNavComponent,
  ],
})
export class SharedModule {}
