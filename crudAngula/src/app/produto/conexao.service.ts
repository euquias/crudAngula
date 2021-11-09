import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Produto } from './produto';
import { environment } from 'src/environments/environment';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

   produtos: Produto[] = [];

   private readonly API = `${environment.API}produtos`; 

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Produto[]>(this.API);
  }

  create(produto: string){
    return this.http.post(this.API, produto).pipe();
  }

}



