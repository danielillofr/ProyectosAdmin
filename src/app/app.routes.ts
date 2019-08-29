import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './components/pages/default/default.component';

const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: '**', component: DefaultComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(routes);