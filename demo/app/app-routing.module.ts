import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicExampleComponent } from './examples/basic/basic.component';
import { SimuleComponent } from './pages/simule/simule.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'simule', component: SimuleComponent },
  { path: 'quem-somos', component: BasicExampleComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
