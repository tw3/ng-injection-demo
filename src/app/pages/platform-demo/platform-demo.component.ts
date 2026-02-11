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

  platformCode = `// Low-level API to provide at platform level
import { createPlatformFactory, platformCore } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

// Create a custom platform with additional providers
const customPlatform = createPlatformFactory(
  platformBrowser,       // parent platform factory
  'myCustomPlatform',    // platform name
  [
    // These providers are at the PLATFORM level
    { provide: SharedAnalytics, useClass: SharedAnalyticsImpl },
    { provide: PLATFORM_CONFIG, useValue: { debug: true } },
  ]
);

// All apps bootstrapped on this platform share these providers
customPlatform().bootstrapModule(AppModule);`;

  multiAppCode = `// Multiple Angular apps sharing a platform
const platform = customPlatform();

// Both apps share the same platform-level providers
platform.bootstrapModule(App1Module);
platform.bootstrapModule(App2Module);

// SharedAnalytics is the SAME instance in both apps!`;
}
