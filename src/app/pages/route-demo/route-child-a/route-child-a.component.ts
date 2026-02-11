import { Component, inject } from '@angular/core';
import { TrackerService } from '../../../services/tracker.service';
import { InstanceCardComponent } from '../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-route-child-a',
  imports: [InstanceCardComponent],
  templateUrl: './route-child-a.component.html',
})
export class RouteChildAComponent {
  // Inherits the route-level TrackerService from the parent route's providers
  tracker = inject(TrackerService);
}
