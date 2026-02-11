import { Directive, inject } from '@angular/core';
import { provideTracker, TrackerService } from '../services/tracker.service';

/**
 * A directive that provides its own TrackerService at the directive level.
 * Any component within this directive's host element that injects TrackerService
 * will receive this directive-scoped instance instead of one from higher up the tree.
 */
@Directive({
  selector: '[appHighlight]',
  providers: [provideTracker('Directive')],
  exportAs: 'appHighlight',
})
export class HighlightDirective {
  readonly tracker = inject(TrackerService);
}
