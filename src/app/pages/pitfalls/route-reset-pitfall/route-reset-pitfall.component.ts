import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CodeSnippetComponent } from '../../../shared/code-snippet/code-snippet.component';
import { EphemeralWidgetComponent } from './ephemeral-widget/ephemeral-widget.component';

@Component({
  selector: 'app-route-reset-pitfall',
  imports: [
    EphemeralWidgetComponent,
    CodeSnippetComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './route-reset-pitfall.component.html',
  styleUrl: './route-reset-pitfall.component.scss',
})
export class RouteResetPitfallComponent {
  visible = signal(true);

  bugCode = `// Service provided at route level
{
  path: 'feature',
  providers: [provideTracker('Route')],
  component: FeatureComponent,
}

// With withExperimentalAutoCleanupInjectors() enabled:
// 1. Navigate to /feature → instance created, counter = 0
// 2. Increment counter to 5
// 3. Navigate to /other → injector DESTROYED (auto-cleanup)
// 4. Navigate back to /feature → NEW instance, counter = 0 ← state lost!
//
// NOTE: Without the auto-cleanup feature, the injector actually
// persists — but relying on that is fragile and may leak memory.`;

  fixCode = `// FIX: Provide at root level if state should persist
// Option 1: providedIn: 'root'
@Injectable({ providedIn: 'root' })
export class FeatureStateService { ... }

// Option 2: Provide in app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    ...provideTracker('Root'),  // Survives navigation
  ],
};`;
}
