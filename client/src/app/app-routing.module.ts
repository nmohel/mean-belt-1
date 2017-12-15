import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'poll/:id', component: VoteComponent},
  {path: 'create', component: CreateComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
