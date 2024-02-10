import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrlFacture = environment.apiUrlFacture;
  readonly API_URL = this.apiUrlFacture;
  
  /* 'http://mari.api.local/SpringMVC/facture';
*/

  constructor(private httpClient: HttpClient) { }

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-factures`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${this.API_URL}/add-facture`, facture)
  }
}
