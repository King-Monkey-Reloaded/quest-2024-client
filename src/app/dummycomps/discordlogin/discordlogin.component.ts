import { Component } from '@angular/core';

@Component({
  selector: 'app-discordlogin',
  standalone: true,
  imports: [],
  templateUrl: './discordlogin.component.html',
  styleUrl: './discordlogin.component.css'
})
export class DiscordloginComponent {
  ngOnInit(): void {
    // Redirige al usuario a la URL de autorización de Discord
    const url = 'https://discord.com/oauth2/authorize?client_id=1216916993106645003&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+guilds+guilds.members.read';
    window.location.href = url;
  }
}
