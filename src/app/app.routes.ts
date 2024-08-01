import { Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/live',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'history',
    component: HistoryComponent,
    title: 'Match History',
  },
  {
    path: 'live',
    component: LiveComponent,
    title: 'Live Matches',
  },
  {
    path: 'point-table',
    component: PointTableComponent,
    title: 'Point-Table',
  },
];
