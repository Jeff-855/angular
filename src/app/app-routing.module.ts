import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TestComponent } from './components/test/test.component';
import { LoginTestComponent } from './components/login-test/login-test.component';

const routes: Routes = [
  { path: '', redirectTo: 'logintest', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'test', component: TestComponent},
  { path: 'logintest', component: LoginTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
