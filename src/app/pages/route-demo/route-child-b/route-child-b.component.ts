import { Component, inject } from '@angular/core';
import { TrackerService } from '../../../services/tracker.service';
import { InstanceCardComponent } from '../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-route-child-b',
  imports: [InstanceCardComponent],
  templateUrl: './route-child-b.component.html',
})
export class RouteChildBComponent {
  // Same route-level instance as the parent and sibling
  tracker = inject(TrackerService);
}
