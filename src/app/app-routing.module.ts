import { NgModule } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { HomeComponent } from './pages/home/home/home.component';
import { WelcomingNoteComponent } from './welcoming-note/welcoming-note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'startup',
    pathMatch: 'full'
  },
  {
    path:"about-us", component: AboutUsComponent
  },
  {
    path:"welcoming-note", component: WelcomingNoteComponent
  },
  {
    path:"contact-us", component: ContactUsComponent
  },


  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(m => m.AuthModule),
    canLoad: [NoAuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
    component: HomeComponent
  },

  {
    path: 'approval',
    loadChildren: () =>
      import('./pages/approval/approval.module').then(m => m.ApprovalModule)
  },
  {
    path: 'sectors',
    loadChildren: () =>
      import('./pages/sectors/sectors.module').then(m => m.SectorsModule)
  },
  {
    path: 'startup',
    loadChildren: () =>
      import('./pages/startup/startup.module').then(m => m.StartupModule)
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}
