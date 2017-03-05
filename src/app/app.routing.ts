/**
 * Created by smil on 29.09.2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import {FirstComponentComponent} from "./first-component/first-component.component";

const appRoutes: Routes = <Routes>[
    {
          path: 'first',
          component: FirstComponentComponent
    },
  {
          path: 'second',
          component: SecondComponentComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
