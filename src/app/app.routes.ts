import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard';
import { Support } from './pages/support';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'support',
    component: Support,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('../demos/demos.routes').then((r) => r.DEMO_ROUTES),
  },
  {
    path: 'links',
    loadChildren: () =>
      import('../links/link.routes').then((r) => r.LINKS_ROUTES),
  },
  {
    path: 'counter-lab',
    loadChildren: () =>
      import('../counter-lab/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
