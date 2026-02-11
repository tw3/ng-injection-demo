import { Component, inject } from '@angular/core';
import { provideTracker, TrackerService } from '../../../../services/tracker.service';
import { InstanceCardComponent } from '../../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-pitfall-widget-a',
  imports: [InstanceCardComponent],
  providers: [provideTracker('Component')],
  templateUrl: './pitfall-widget-a.component.html',
  styleUrl: './pitfall-widget-a.component.scss',
})
export class PitfallWidgetAComponent {
  tracker = inject(TrackerService);
}
