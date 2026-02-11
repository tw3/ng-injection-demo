import { Component, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TrackerService } from '../../services/tracker.service';
import { InstanceCardComponent } from '../../shared/instance-card/instance-card.component';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-platform-demo',
  imports: [InstanceCardComponent, CodeSnippetComponent],
  templateUrl: './platform-demo.component.html',
  styleUrl: './platform-demo.component.scss',
})
export class PlatformDemoComponent {
  private readonly doc = inject(DOCUMENT);

  platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  documentTitle = this.doc.title;

  rootTracker = inject(TrackerService);

  providedInCode = `// The modern way: providedIn: 'platform'
@Injectable({ providedIn: 'platform' })
export class SharedAnalyticsService {
  // This single instance is shared across ALL Angular apps
  // bootstrapped on the same page — not just one app.
  private events: AnalyticsEvent[] = [];

  track(event: AnalyticsEvent): void {
    this.events.push(event);
  }
}

// Any component in any app on the page can inject it:
export class SomeComponent {
  private analytics = inject(SharedAnalyticsService);
}`;

  comparisonCode = `// providedIn scope comparison
@Injectable({ providedIn: 'root' })
// -> ONE instance per application
// -> Each app on the page gets its own

@Injectable({ providedIn: 'platform' })
// -> ONE instance shared across ALL apps on the page
// -> Ideal for cross-app communication, shared analytics, etc.`;

  advancedCode = `// Advanced alternative: createPlatformFactory
// Use this when you need to provide non-tree-shakable tokens
// or configure third-party services at the platform level.
import { createPlatformFactory } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

const customPlatform = createPlatformFactory(
  platformBrowser,
  'myCustomPlatform',
  [
    { provide: SharedAnalytics, useClass: SharedAnalyticsImpl },
    { provide: PLATFORM_CONFIG, useValue: { debug: true } },
  ]
);

const platform = customPlatform();
platform.bootstrapModule(App1Module);
platform.bootstrapModule(App2Module);
// SharedAnalytics is the SAME instance in both apps`;
}
