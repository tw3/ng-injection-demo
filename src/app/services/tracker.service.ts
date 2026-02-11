import {
  Injectable,
  InjectionToken,
  Provider,
  WritableSignal,
  signal,
  inject,
  DestroyRef,
} from '@angular/core';
import { InstanceRegistryService } from './instance-registry.service';

export const TRACKER_LEVEL = new InjectionToken<string>('TrackerLevel');

let nextInstanceId = 1;

@Injectable()
export class TrackerService {
  readonly instanceId: number;
  readonly uid: string;
  readonly color: string;
  readonly createdAt: Date;
  readonly counter: WritableSignal<number>;
  readonly level: string;

  constructor() {
    this.instanceId = nextInstanceId++;
    this.uid = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.createdAt = new Date();
    this.counter = signal(0);
    this.level = inject(TRACKER_LEVEL, { optional: true }) ?? 'Unknown';
    this.color = levelToColor(this.level);

    const registry = inject(InstanceRegistryService);
    registry.register(this);

    inject(DestroyRef).onDestroy(() => registry.unregister(this));
  }

  increment(): void {
    this.counter.update(v => v + 1);
  }

  decrement(): void {
    this.counter.update(v => v - 1);
  }
}

/**
 * Helper function to provide TrackerService at any level of the injector hierarchy.
 * Returns both the TrackerService provider and the TRACKER_LEVEL token.
 */
export function provideTracker(level: string): Provider[] {
  return [
    { provide: TRACKER_LEVEL, useValue: level },
    TrackerService,
  ];
}

function levelToColor(level: string): string {
  const colors: Record<string, string> = {
    Platform: '#ef5350',
    Root: '#42a5f5',
    Route: '#ffa726',
    Module: '#26a69a',
    Component: '#66bb6a',
    Directive: '#ab47bc',
  };
  return colors[level] ?? '#78909c';
}
