import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoFormComponent } from './components/foto-form/foto-form.component';
import { FotoListComponent } from './components/foto-list/foto-list.component';
import { FotoPreviewComponent } from './components/foto-preview/foto-preview.component';
import { FotoPriveComponent } from './components/foto-prive/foto-prive.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'singin',
    component: SigninComponent
  },
  {
  path:'foto',
  component: FotoListComponent
},
{
  path: 'private',
  component: FotoPriveComponent
},
{
  path:'foto/new',
  component: FotoFormComponent
},
{
  path:'foto/:id',
  component:FotoPreviewComponent
},
{
  path:'',
  redirectTo: '/foto',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
