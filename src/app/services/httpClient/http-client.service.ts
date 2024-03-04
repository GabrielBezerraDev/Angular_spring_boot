import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from '../../environment/environment-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(path:string):Observable<T>{
    return this.httpClient.get<T>(`${backendUrl}/${path}`);
  }

}
