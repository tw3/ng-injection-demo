import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  RouterFeatures,
  withExperimentalAutoCleanupInjectors,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideTracker } from './services/tracker.service';

/**
 * Whether `withExperimentalAutoCleanupInjectors()` is active.
 * Persisted in localStorage so the user can toggle it and reload.
 */
export const AUTO_CLEANUP_ENABLED =
  typeof localStorage !== 'undefined' &&
  localStorage.getItem('autoCleanupInjectors') === 'true';

const routerFeatures: RouterFeatures[] = [];
if (AUTO_CLEANUP_ENABLED) {
  routerFeatures.push(withExperimentalAutoCleanupInjectors());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideRouter(routes, ...routerFeatures),

    // Provide TrackerService at the ROOT level of the injector hierarchy.
    // This instance will be shared across the entire application unless
    // a child injector (component, directive, route, or module) provides its own.
    ...provideTracker('Root'),
  ],
};
