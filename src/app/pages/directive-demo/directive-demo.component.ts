import { Component, inject } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { InstanceCardComponent } from '../../shared/instance-card/instance-card.component';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';
import { HighlightDirective } from '../../shared/highlight.directive';

@Component({
  selector: 'app-directive-demo',
  imports: [InstanceCardComponent, CodeSnippetComponent, HighlightDirective],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss',
})
export class DirectiveDemoComponent {
  rootTracker = inject(TrackerService);

  directiveCode = `@Directive({
  selector: '[appHighlight]',
  providers: [provideTracker('Directive')],  // <-- provides at directive level
  exportAs: 'appHighlight',
})
export class HighlightDirective {
  readonly tracker = inject(TrackerService);
}`;

  usageCode = `<!-- Each usage creates a new directive-level instance -->
<div appHighlight #hl="appHighlight">
  <app-instance-card [tracker]="hl.tracker" />
</div>`;
}
