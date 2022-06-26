import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MainComponent } from './main/main.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
