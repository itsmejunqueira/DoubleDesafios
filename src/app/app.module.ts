import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { HomeComponent } from './pages/home/home.component';
import { MocksComponent } from './shared/mocks/mocks.component';
import { AddressComponent } from './pages/custumers/address/address.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    HomeComponent,
    MocksComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
