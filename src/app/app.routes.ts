import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
    },
    {
        path: '404',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    { path: '**', redirectTo: '/404' },
];

