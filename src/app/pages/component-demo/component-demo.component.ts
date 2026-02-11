import { Component, inject } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { InstanceCardComponent } from '../../shared/instance-card/instance-card.component';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';
import { IsolatedCounterComponent } from './isolated-counter/isolated-counter.component';

@Component({
  selector: 'app-component-demo',
  imports: [InstanceCardComponent, CodeSnippetComponent, IsolatedCounterComponent],
  templateUrl: './component-demo.component.html',
})
export class ComponentDemoComponent {
  // This component does NOT provide its own TrackerService.
  // It inherits the root-level instance.
  rootTracker = inject(TrackerService);

  componentCode = `@Component({
  selector: 'app-isolated-counter',
  providers: [provideTracker('Component')],  // <-- each instance gets its own
  template: \`
    <app-instance-card [tracker]="tracker" />
  \`
})
export class IsolatedCounterComponent {
  tracker = inject(TrackerService);
}`;
}
