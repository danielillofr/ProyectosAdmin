import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './components/pages/default/default.component';
import { LogueadoComponent } from './components/logueado/logueado.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProjectComponent } from './components/pages/create-project/create-project.component';
import { ListProjectsComponent } from './components/pages/list-projects/list-projects.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { DetailProjectComponent } from './components/pages/project/detail-project/detail-project.component';
import { ProjectComponent } from './components/pages/project/project/project.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'pages', 
        component: LogueadoComponent,
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
                        path: 'detail',
                        component: DetailProjectComponent
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