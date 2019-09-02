import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DefaultComponent } from './components/pages/default/default.component';
import { app_routing } from './app.routes';
import { LogueadoComponent } from './components/logueado/logueado.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProjectComponent } from './components/pages/create-project/create-project.component';
import { ListProjectsComponent } from './components/pages/list-projects/list-projects.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultComponent,
    LogueadoComponent,
    LoginComponent,
    CreateProjectComponent,
    ListProjectsComponent,
    StatisticsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
