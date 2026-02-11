import { Component, inject } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { InstanceCardComponent } from '../../shared/instance-card/instance-card.component';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';
import { RootChildComponent } from './root-child/root-child.component';

@Component({
  selector: 'app-root-demo',
  imports: [InstanceCardComponent, CodeSnippetComponent, RootChildComponent],
  templateUrl: './root-demo.component.html',
})
export class RootDemoComponent {
  // Inherits the Root-level TrackerService provided in app.config.ts
  tracker = inject(TrackerService);

  configCode = `// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ...provideTracker('Root'),  // <-- provided at root
  ],
};`;

  injectableCode = `// Alternatively, use providedIn: 'root'
@Injectable({ providedIn: 'root' })
export class MyService {
  // Angular creates ONE instance, shared app-wide
}`;
}
