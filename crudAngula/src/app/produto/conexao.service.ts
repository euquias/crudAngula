import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { environment } from 'src/environments/environment';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConexaoService {
  save(value: any) {
    throw new Error('Method not implemented.');
  }
  produtos: Produto[] = [];

  private readonly API = `${environment.API}produtos`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produto[]>(this.API);
  }

  public create(Produto: string) {
    return this.http.post(this.API, Produto).pipe(take(1));
  }
}
