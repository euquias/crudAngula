import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

   produtos: Produto[] = [];

   private readonly API ='http://localhost:3003/produtos'; 

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Produto[]>(this.API);
  }

}
