import { Routes } from '@angular/router';
import { DiscordloginComponent } from './dummycomps/discordlogin/discordlogin.component';
import { Test1Component } from './dummycomps/test1/test1.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
    {path: 'welcome', component: WelcomeComponent}, 
    {path:'auth/discord/login', component: DiscordloginComponent},
    {path:'api/auth/discord/redirect', component: Test1Component},
    {path:'', redirectTo:'/welcome', pathMatch:'full'},
];
