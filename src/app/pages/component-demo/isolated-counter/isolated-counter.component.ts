import { Component, inject, input } from '@angular/core';
import { provideTracker, TrackerService } from '../../../services/tracker.service';
import { InstanceCardComponent } from '../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-isolated-counter',
  imports: [InstanceCardComponent],
  // Each instance of this component provides its OWN TrackerService.
  // This means every <app-isolated-counter> gets a brand-new, independent instance.
  providers: [provideTracker('Component')],
  templateUrl: './isolated-counter.component.html',
  styleUrl: './isolated-counter.component.scss',
})
export class IsolatedCounterComponent {
  label = input<string>('Component');

  // This injects the component-level instance (NOT the root one)
  tracker = inject(TrackerService);
}
