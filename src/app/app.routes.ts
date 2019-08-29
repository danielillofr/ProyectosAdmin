import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './components/pages/default/default.component';
import { LogueadoComponent } from './components/logueado/logueado.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoComponent } from './components/pages/listado/listado.component';

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
                path: 'pepito',
                component: ListadoComponent

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