import { Component, inject } from '@angular/core';
import { provideTracker, TrackerService } from '../../../../services/tracker.service';
import { InstanceCardComponent } from '../../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-override-child',
  imports: [InstanceCardComponent],
  providers: [provideTracker('Component')],
  templateUrl: './override-child.component.html',
  styleUrl: './override-child.component.scss',
})
export class OverrideChildComponent {
  tracker = inject(TrackerService);
}
