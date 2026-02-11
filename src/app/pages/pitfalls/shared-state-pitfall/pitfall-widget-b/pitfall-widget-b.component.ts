import { Component, inject } from '@angular/core';
import { provideTracker, TrackerService } from '../../../../services/tracker.service';
import { InstanceCardComponent } from '../../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-pitfall-widget-b',
  imports: [InstanceCardComponent],
  providers: [provideTracker('Component')],
  templateUrl: './pitfall-widget-b.component.html',
  styleUrl: './pitfall-widget-b.component.scss',
})
export class PitfallWidgetBComponent {
  tracker = inject(TrackerService);
}
