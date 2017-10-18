import {BookDashboardComponent} from './book/book-dashboard/book-dashboard.component';
import {Route, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from 'app/not-found/not-found.component';

const routes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BookDashboardComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  })
export class AppRoutingModule { }
