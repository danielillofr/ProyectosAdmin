import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './components/pages/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProjectComponent } from './components/pages/create-project/create-project.component';
import { ListProjectsComponent } from './components/pages/list-projects/list-projects.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { DetailProjectComponent } from './components/pages/project/detail-project/detail-project.component';
import { ProjectComponent } from './components/pages/project/project/project.component';
import { DocumentsComponent } from './components/pages/project/documents/documents.component';
import { LogComponent } from './components/pages/project/log/log.component';
import { ReportsComponent } from './components/pages/project/reports/reports.component';
import { PagesComponent } from './components/pages/pages/pages.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'pages', 
        component: PagesComponent,
        children:[
            {
                path: '',
                component: DefaultComponent
            },
            {
                path: 'createproject',
                component: CreateProjectComponent

            },
            {
                path: 'listprojects',
                component: ListProjectsComponent

            },
            {
                path: 'statistics',
                component: StatisticsComponent

            },
            {
                path: 'profile',
                component: ProfileComponent

            },
            {
                path: 'project/:id',
                component: ProjectComponent,
                children:[
                    {
                        path: '',
                        component: DetailProjectComponent
                    },
                    {
                        path: 'documents',
                        component: DocumentsComponent
                    },
                    {
                        path:'log',
                        component: LogComponent
                    },
                    {
                        path: 'reports',
                        component: ReportsComponent
                    }
                ]
            },
            {
                path: '**',
                component: DefaultComponent
            }
        ] },
    { path: '**', component: LoginComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(routes);