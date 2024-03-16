import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscordServiceService } from '@services/discord-service.service';
import { TokenResponse } from '../../../models/interfaces/interfaces.discord';
import {Router} from "@angular/router"
@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent {
  code!: string | null;
  isAdmin: boolean = false;
  token_response!:TokenResponse;

  id_role: string = '1218079498831134780';

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private discService: DiscordServiceService,
    ){}

  async ngOnInit(){
    this.code = this.route.snapshot.queryParamMap.get('code');
    
    if(!this.code){
      // do something if there is no code
      return;
    }

    await this.getTokenAccess(this.code);
    console.log(this.token_response);

    if(await this.getRole(this.token_response.access_token)){
      this.router.navigate(['/panel'])
    }
    else{
      this.router.navigate(['/home'])
    }

  }

  async getTokenAccess(code: string){
    try {
      const res = await (await this.discService.access_token(code)).toPromise();
      this.token_response = res as TokenResponse;
      console.log(this.token_response);
    } catch (error) {
        console.error(error);
    }
  }

  async getRole(access_token: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
        (await this.discService.getUserGuilds(access_token)).subscribe({
            next: (res) => {
                console.log(res);
                let aux = res as any;
                if (aux.roles.includes(this.id_role)) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            },
            error: (resErr) => {
                console.log(resErr);
                reject(resErr);
            }
        });
    });
}
}
