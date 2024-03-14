import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscordServiceService } from '../../services/discord-service.service';
@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  codeParam!: string | null;
  constructor(private route: ActivatedRoute, private discService: DiscordServiceService){}

  async ngOnInit() {
    // Get the parameter value from the URL and save it as a constant
    this.codeParam = this.route.snapshot.queryParamMap.get('code');
    if(!this.codeParam){
      // do something if error
    }
    console.log(this.codeParam); 

    (await this.discService.access_token(this.codeParam!)).subscribe({
      next:async (res)=>{
        console.log(res);
        let obj = res as any
        (await this.discService.getUserDetails(obj.access_token)).subscribe({
          next:async (res)=>{
            console.log(res);
            (await (this.discService.getUserGuilds(obj.access_token))).subscribe({
              next:(res)=>{
                console.log(res);
              }, 
              error:(resErr)=>{
                console.log(resErr);
              }
            });
          }, 
          error:(resErr)=>{
            console.log(resErr);
          }
        });
        
        
      },
      error:(resErr)=>{
        console.log(resErr);
      }
    })
  }
}
