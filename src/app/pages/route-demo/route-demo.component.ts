import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { TrackerService } from '../../services/tracker.service';
import { InstanceCardComponent } from '../../shared/instance-card/instance-card.component';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';
import { AUTO_CLEANUP_ENABLED } from '../../app.config';

@Component({
  selector: 'app-route-demo',
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,
    MatButtonModule, MatTabsModule,
    MatSlideToggleModule, MatChipsModule,
    InstanceCardComponent, CodeSnippetComponent,
  ],
  templateUrl: './route-demo.component.html',
  styleUrl: './route-demo.component.scss',
})
export class RouteDemoComponent {
  // This injects the route-level instance (NOT the root one).
  // The route's providers: [provideTracker('Route')] shadows the root.
  routeTracker = inject(TrackerService);

  autoCleanup = AUTO_CLEANUP_ENABLED;

  routeCode = `// app.routes.ts
{
  path: 'route',
  providers: [provideTracker('Route')],  // <-- route-level provider
  component: RouteDemoComponent,
  children: [
    { path: 'child-a', component: RouteChildAComponent },
    { path: 'child-b', component: RouteChildBComponent },
  ]
}`;

  cleanupCode = `// app.config.ts
import { withExperimentalAutoCleanupInjectors } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withExperimentalAutoCleanupInjectors()  // <-- opt-in cleanup
    ),
  ],
};`;

  toggleAutoCleanup(): void {
    const newValue = !this.autoCleanup;
    localStorage.setItem('autoCleanupInjectors', String(newValue));
    location.reload();
  }
}
