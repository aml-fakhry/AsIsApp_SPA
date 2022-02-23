import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { SignupComponent } from './components/security/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/security/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'streams',
    loadChildren: () =>
      import('./components/streams/streams.module').then(
        (m) => m.StreamsModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
