import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConexaoService {
     private readonly API = '  http://localhost:3000/produto' 

  save(value: any) {
    throw new Error('Method not implemented.');
  }
  produtos: Produto[] = [];

  /* private readonly API = `${environment.API}produto`; */
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produto[]>(this.API);
  }

  loadByID(id: any) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  public create(Produto: string) {
    return this.http.post(this.API, Produto).pipe(take(1));
  }
}
