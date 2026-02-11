import { Component, inject } from '@angular/core';
import { TrackerService } from '../../services/tracker.service';
import { InstanceCardComponent } from '../../shared/instance-card/instance-card.component';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-module-demo',
  imports: [InstanceCardComponent, CodeSnippetComponent],
  templateUrl: './module-demo.component.html',
})
export class ModuleDemoComponent {
  // Gets the module-level TrackerService (provided by DemoModule via importProvidersFrom)
  moduleTracker = inject(TrackerService);

  moduleCode = `// demo.module.ts
@NgModule({
  providers: [provideTracker('Module')],  // <-- module-level provider
})
export class DemoModule {}`;

  routesCode = `// module-demo.routes.ts
export const MODULE_DEMO_ROUTES: Routes = [
  {
    path: '',
    providers: [importProvidersFrom(DemoModule)],  // <-- extracted into route injector
    loadComponent: () => import('./module-demo.component')
      .then(m => m.ModuleDemoComponent),
  },
];`;
}
