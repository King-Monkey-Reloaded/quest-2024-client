import { Routes } from '@angular/router';
import { DiscordloginComponent } from '@pages/discordlogin/discordlogin.component';
// import { Test1Component } from './dummycomps/test1/test1.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RedirectComponent } from '@shared/components/redirect/redirect.component';
import { UserHomeComponent } from '@pages/user/user-home/user-home.component';
import { AdminComponent } from '@pages/admin/admin.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'auth/discord/login', component: DiscordloginComponent },
  { path: 'api/auth/discord/redirect', component: RedirectComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'panel', component: AdminComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
