import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { InstanceRegistryService } from '../../services/instance-registry.service';

@Component({
  selector: 'app-instance-monitor',
  imports: [MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './instance-monitor.component.html',
  styleUrl: './instance-monitor.component.scss',
})
export class InstanceMonitorComponent {
  readonly registry = inject(InstanceRegistryService);
  readonly expanded = signal(false);
}
