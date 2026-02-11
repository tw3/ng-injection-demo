import { NgModule } from '@angular/core';
import { provideTracker } from '../../services/tracker.service';

/**
 * A classic NgModule that provides TrackerService at the module level.
 * When this module is imported (eagerly or lazily), its providers become
 * available within the corresponding environment injector.
 */
@NgModule({
  providers: [provideTracker('Module')],
})
export class DemoModule {}
