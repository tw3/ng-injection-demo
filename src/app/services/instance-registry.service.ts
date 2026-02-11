import { Injectable, signal, computed } from '@angular/core';
import type { TrackerService } from './tracker.service';

/**
 * Singleton registry that tracks ALL live TrackerService instances across the app.
 * Provided at root level so it is always the same instance.
 */
@Injectable({ providedIn: 'root' })
export class InstanceRegistryService {
  private readonly _instances = signal<TrackerService[]>([]);

  readonly instances = this._instances.asReadonly();
  readonly count = computed(() => this._instances().length);

  register(instance: TrackerService): void {
    this._instances.update(list => [...list, instance]);
  }

  unregister(instance: TrackerService): void {
    this._instances.update(list => list.filter(i => i !== instance));
  }
}
