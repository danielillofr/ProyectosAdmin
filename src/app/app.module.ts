import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { DefaultComponent } from './components/pages/subpages/default/default.component';
import { app_routing } from './app.routes';
import { PagesComponent } from './components/pages/pages/pages.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProjectComponent } from './components/pages/subpages/create-project/create-project.component';
import { ListProjectsComponent } from './components/pages/subpages/list-projects/list-projects.component';
import { StatisticsComponent } from './components/pages/subpages/statistics/statistics.component';
import { ProfileComponent } from './components/pages/subpages/profile/profile.component';
import { DetailProjectComponent } from './components/pages/subpages/project/subpages/details/detail-project/detail-project.component';
import { ProjectComponent } from './components/pages/subpages/project/project/project.component';
import { BarraComponent } from './components/pages/subpages/project/barra/barra.component';
import { DocumentsComponent } from './components/pages/subpages/project/subpages/documents/documents.component';
import { ReportsComponent } from './components/pages/subpages/project/subpages/reports/reports.component';
import { LogComponent } from './components/pages/subpages/project/subpages/log/log.component';
import { Fase1Component } from './components/pages/subpages/project/subpages/details/subpages/fase1/fase1.component';
import { BarraFasesComponent } from './components/pages/subpages/project/subpages/details/barra-fases/barra-fases.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultComponent,
    PagesComponent,
    LoginComponent,
    CreateProjectComponent,
    ListProjectsComponent,
    StatisticsComponent,
    ProfileComponent,
    DetailProjectComponent,
    ProjectComponent,
    BarraComponent,
    DocumentsComponent,
    ReportsComponent,
    LogComponent,
    BarraFasesComponent,
    Fase1Component
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
