import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {
  private apiUrlReglement = environment.apiUrlReglement;
  
  readonly API_URL = this.apiUrlReglement;
  
   // 'http://mari.api.local/SpringMVC/reglement';

  constructor(private httpClient: HttpClient) {
  }


  addReglement(reglement: any) {
    return this.httpClient.post(`${this.API_URL}/add-reglement`, reglement)
  }

  getAllReglements() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-reglements`)
  }


}
