import { Routes } from '@angular/router';
import { provideTracker } from './services/tracker.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/overview/overview.component').then(m => m.OverviewComponent),
  },
  {
    path: 'platform',
    loadComponent: () =>
      import('./pages/platform-demo/platform-demo.component').then(m => m.PlatformDemoComponent),
  },
  {
    path: 'root',
    loadComponent: () =>
      import('./pages/root-demo/root-demo.component').then(m => m.RootDemoComponent),
  },
  {
    path: 'route',
    // Provide TrackerService at the ROUTE level.
    // This creates a new instance scoped to this route and its children.
    providers: [provideTracker('Route')],
    loadComponent: () =>
      import('./pages/route-demo/route-demo.component').then(m => m.RouteDemoComponent),
    children: [
      { path: '', redirectTo: 'child-a', pathMatch: 'full' },
      {
        path: 'child-a',
        loadComponent: () =>
          import('./pages/route-demo/route-child-a/route-child-a.component').then(m => m.RouteChildAComponent),
      },
      {
        path: 'child-b',
        loadComponent: () =>
          import('./pages/route-demo/route-child-b/route-child-b.component').then(m => m.RouteChildBComponent),
      },
    ],
  },
  {
    path: 'module',
    loadChildren: () =>
      import('./pages/module-demo/module-demo.routes').then(m => m.MODULE_DEMO_ROUTES),
  },
  {
    path: 'component',
    loadComponent: () =>
      import('./pages/component-demo/component-demo.component').then(m => m.ComponentDemoComponent),
  },
  {
    path: 'directive',
    loadComponent: () =>
      import('./pages/directive-demo/directive-demo.component').then(m => m.DirectiveDemoComponent),
  },
  {
    path: 'pitfalls',
    loadComponent: () =>
      import('./pages/pitfalls/pitfalls.component').then(m => m.PitfallsComponent),
  },
];
