import { Routes } from '@angular/router';
import { DiscordloginComponent } from './dummycomps/discordlogin/discordlogin.component';
import { LoginComponent } from './dummycomps/login/login.component';
import { Test1Component } from './dummycomps/test1/test1.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'auth/discord/login', component: DiscordloginComponent},
    {path:'api/auth/discord/redirect', component: Test1Component},
    {path:'', redirectTo:'/login', pathMatch:'full'},
];
