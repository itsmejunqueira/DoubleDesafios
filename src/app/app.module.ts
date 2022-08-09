import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponent } from './shared/shared.component';
import { PagesComponent } from './pages/pages.component';
import { CoreComponent } from './core/core.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { DirectivesComponent } from './core/authentication/directives/directives.component';
import { GuardsComponent } from './core/authentication/guards/guards.component';
import { HelpersComponent } from './core/authentication/helpers/helpers.component';
import { PipesComponent } from './core/authentication/pipes/pipes.component';
import { ServicesComponent } from './core/authentication/services/services.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './shared/components/components.component';
import { MocksComponent } from './shared/components/mocks/mocks.component';
import { ModelsComponent } from './shared/components/models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    PagesComponent,
    CoreComponent,
    AuthenticationComponent,
    DirectivesComponent,
    GuardsComponent,
    HelpersComponent,
    PipesComponent,
    ServicesComponent,
    CourseDetailsComponent,
    HomeComponent,
    ComponentsComponent,
    MocksComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
