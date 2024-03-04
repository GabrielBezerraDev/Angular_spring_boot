import { Injectable } from '@angular/core';
import { HttpClientService } from '../httpClient/http-client.service';
import { Observable } from 'rxjs';
import { ITeste } from '../../modules/home/interface/ITeste';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClientService: HttpClientService) { }

  public getPedido():Observable<ITeste>{
    return this.httpClientService.get<ITeste>("api/test");
  }

}
