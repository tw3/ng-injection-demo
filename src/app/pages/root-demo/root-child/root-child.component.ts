import { Component, inject, input } from '@angular/core';
import { TrackerService } from '../../../services/tracker.service';
import { InstanceCardComponent } from '../../../shared/instance-card/instance-card.component';

@Component({
  selector: 'app-root-child',
  imports: [InstanceCardComponent],
  templateUrl: './root-child.component.html',
  styleUrl: './root-child.component.scss',
})
export class RootChildComponent {
  label = input<string>('Child');

  // This component does NOT provide its own TrackerService.
  // It inherits the one from the Root injector.
  tracker = inject(TrackerService);
}
