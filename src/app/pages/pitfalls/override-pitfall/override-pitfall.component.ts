import { Component, inject } from '@angular/core';
import { TrackerService } from '../../../services/tracker.service';
import { InstanceCardComponent } from '../../../shared/instance-card/instance-card.component';
import { CodeSnippetComponent } from '../../../shared/code-snippet/code-snippet.component';
import { OverrideChildComponent } from './override-child/override-child.component';

@Component({
  selector: 'app-override-pitfall',
  imports: [InstanceCardComponent, OverrideChildComponent, CodeSnippetComponent],
  templateUrl: './override-pitfall.component.html',
})
export class OverridePitfallComponent {
  rootTracker = inject(TrackerService);

  bugCode = `// Parent uses root-level service
@Component({
  selector: 'app-parent',
  template: \`<app-child />\`  // expects child to share state
})
export class ParentComponent {
  tracker = inject(TrackerService);  // Root instance
}

// Child ACCIDENTALLY re-provides the service ← BUG!
@Component({
  selector: 'app-child',
  providers: [TrackerService],  // Creates a NEW instance!
})
export class ChildComponent {
  tracker = inject(TrackerService);  // Gets a DIFFERENT instance
}`;

  fixCode = `// FIX: Remove providers from child
@Component({
  selector: 'app-child',
  // NO providers array → inherits from parent
})
export class ChildComponent {
  tracker = inject(TrackerService);  // Same instance as parent!
}`;
}
