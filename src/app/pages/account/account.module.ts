import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const ACCOUNT_ROUTES: Route[] = [
    {
        path: '',
        children: [
            {
                path: 'signin',
                loadComponent: () => import('./signin').then(m => m.SignInComponent)
            },
            {
                path: 'signout',
                loadComponent: () => import('./signout').then(m => m.SignOutComponent)
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(ACCOUNT_ROUTES),
    ],
})
export class AccountModule { }

