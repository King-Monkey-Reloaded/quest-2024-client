import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DiscordServiceService {

  constructor(private http: HttpClient) { }

  async access_token(code: string){
    const params = new HttpParams()
      .set('client_id', environment.DISCORD_CLIENT_ID)
      .set('client_secret', environment.DISCORD_CLIENT_SECRET)
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', environment.DISCORD_REDIRECT_URI);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      // .set('Accept-Encoding', 'application/x-www-form-urlencoded');

    return this.http.post('https://discord.com/api/oauth2/token', params.toString(), {headers});
  }

  async getUserDetails(accessToken: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json' // Add any other headers you need
    });

    return this.http.get('https://discord.com/api/users/@me', { headers });
  }

  async getUserGuilds(accessToken:string){

    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json' // Add any other headers you need
    });

    return this.http.get('https://discord.com/users/@me/guilds', { headers });
  }
}

