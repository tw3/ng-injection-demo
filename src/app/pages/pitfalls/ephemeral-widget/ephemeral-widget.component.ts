import { Component, inject } from '@angular/core';
import { provideTracker, TrackerService } from '../../../services/tracker.service';
import { InstanceCardComponent } from '../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-ephemeral-widget',
  imports: [InstanceCardComponent],
  providers: [provideTracker('Route')],
  templateUrl: './ephemeral-widget.component.html',
  styleUrl: './ephemeral-widget.component.scss',
})
export class EphemeralWidgetComponent {
  tracker = inject(TrackerService);
}
