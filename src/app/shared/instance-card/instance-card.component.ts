import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TrackerService } from '../../services/tracker.service';

@Component({
  selector: 'app-instance-card',
  imports: [DatePipe, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './instance-card.component.html',
  styleUrl: './instance-card.component.scss',
})
export class InstanceCardComponent {
  tracker = input.required<TrackerService>();
}
