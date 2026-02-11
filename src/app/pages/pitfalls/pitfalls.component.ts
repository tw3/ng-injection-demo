import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { SharedStatePitfallComponent } from './shared-state-pitfall.component';
import { OverridePitfallComponent } from './override-pitfall.component';
import { RouteResetPitfallComponent } from './route-reset-pitfall.component';

@Component({
  selector: 'app-pitfalls',
  imports: [
    MatTabsModule,
    MatIconModule,
    SharedStatePitfallComponent,
    OverridePitfallComponent,
    RouteResetPitfallComponent,
  ],
  templateUrl: './pitfalls.component.html',
  styleUrl: './pitfalls.component.scss',
})
export class PitfallsComponent {}
