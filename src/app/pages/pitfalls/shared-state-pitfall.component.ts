import { Component } from '@angular/core';
import { PitfallWidgetAComponent } from './pitfall-widget-a/pitfall-widget-a.component';
import { PitfallWidgetBComponent } from './pitfall-widget-b/pitfall-widget-b.component';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-shared-state-pitfall',
  imports: [
    PitfallWidgetAComponent,
    PitfallWidgetBComponent,
    CodeSnippetComponent,
  ],
  templateUrl: './shared-state-pitfall.component.html',
})
export class SharedStatePitfallComponent {
  bugCode = `// Both widgets provide their own TrackerService ← BUG!
@Component({
  selector: 'app-widget-a',
  providers: [provideTracker('Component')],  // Instance #1
})
export class WidgetAComponent { ... }

@Component({
  selector: 'app-widget-b',
  providers: [provideTracker('Component')],  // Instance #2 (different!)
})
export class WidgetBComponent { ... }`;

  fixCode = `// FIX: Provide at the parent level instead
@Component({
  selector: 'app-dashboard',
  providers: [provideTracker('Component')],  // ONE shared instance
  template: \`
    <app-widget-a />  <!-- inherits parent's instance -->
    <app-widget-b />  <!-- same instance! -->
  \`
})
export class DashboardComponent { }`;
}
