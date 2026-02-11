# Angular DI Hierarchy Explorer

An interactive demo app that visualizes Angular's **dependency injection hierarchy** across every injection level. Each page provides live, working examples backed by a shared `TrackerService` and a floating **Instance Monitor** so you can watch instances appear, persist, and (optionally) get destroyed in real time.

Built with Angular 21 and Angular Material.

## What it demonstrates

Angular's injector tree has several levels. This app gives each one its own page with explanatory text, code snippets, and a live demo you can interact with:

| Level | Route | What you'll see |
|---|---|---|
| **Platform** | `/platform` | The top of the hierarchy. Shows built-in platform tokens (`PLATFORM_ID`, `DOCUMENT`) and explains when custom platform providers apply. |
| **Root** | `/root` | The most common pattern. A singleton `TrackerService` is shared across the entire app. Multiple components all display the same instance. |
| **Route** | `/route` | A `TrackerService` scoped to the `/route` path and its children. Includes a toggle for `withExperimentalAutoCleanupInjectors()` so you can see injector cleanup behavior with and without it. |
| **Module** | `/module` | Provides via an `NgModule` using `importProvidersFrom()`. Demonstrates eager vs. lazy module scoping. |
| **Component** | `/component` | Each component instance gets its own `TrackerService`. Three side-by-side counters prove they are independent. |
| **Directive** | `/directive` | A directive provides its own `TrackerService`, scoping it to the host element's subtree. |
| **Common Pitfalls** | `/pitfalls` | Three tabbed scenarios: accidental shared state, provider override surprises, and route-level state reset. |

## Key features

- **Instance Monitor** — A floating panel (bottom-right) backed by a root-level `InstanceRegistryService`. It shows every live `TrackerService` instance across the app with its level, color, counter value, and unique ID. Navigate between pages and watch instances come and go.

- **Instance Cards** — Each demo page renders reusable cards showing instance metadata (ID, UID, creation time) and an interactive counter. Incrementing the counter in one card and seeing the same value in another proves they share the same instance.

- **`withExperimentalAutoCleanupInjectors()` toggle** — On the Route page, a slide toggle lets you enable or disable Angular's experimental auto-cleanup feature. Because router features are set at bootstrap, toggling this persists the choice to `localStorage` and reloads the app so you can observe the difference live.

- **Code snippets** — Every page shows the relevant provider configuration alongside the live demo so you can connect the code to the behavior.

## Getting started

```bash
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200).

## Project structure

```
src/app/
├── app.config.ts                  # Root providers, router setup, auto-cleanup toggle
├── app.routes.ts                  # All routes with route-level providers
├── app.ts / app.html              # Shell: toolbar, sidenav, router outlet
├── services/
│   ├── tracker.service.ts         # TrackerService + provideTracker() helper
│   └── instance-registry.service.ts  # Singleton registry of live instances
├── shared/
│   ├── instance-card/             # Reusable card displaying one TrackerService
│   ├── instance-monitor/          # Floating FAB + panel showing all live instances
│   ├── code-snippet/              # Syntax-highlighted code block (Prism.js)
│   └── highlight.directive.ts     # Demo directive with its own provider
└── pages/
    ├── overview/                  # Landing page with hierarchy diagram
    ├── platform-demo/             # Platform-level injection
    ├── root-demo/                 # Root-level injection (singleton)
    ├── route-demo/                # Route-level injection + auto-cleanup toggle
    │   ├── route-child-a/
    │   └── route-child-b/
    ├── module-demo/               # NgModule-level injection
    ├── component-demo/            # Component-level injection
    │   └── isolated-counter/
    ├── directive-demo/            # Directive-level injection
    └── pitfalls/                  # Common DI pitfalls (3 tabs)
```

## Build

```bash
ng build
```

Production artifacts are written to `dist/di-hierarchy-demo`.
