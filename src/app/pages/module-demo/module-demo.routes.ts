import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { DemoModule } from './demo.module';

/**
 * These routes lazy-load the module demo page AND import DemoModule's providers
 * into the route's environment injector. This means the TrackerService provided
 * by DemoModule is scoped to this route subtree.
 */
export const MODULE_DEMO_ROUTES: Routes = [
  {
    path: '',
    providers: [importProvidersFrom(DemoModule)],
    loadComponent: () =>
      import('./module-demo.component').then(m => m.ModuleDemoComponent),
  },
];
