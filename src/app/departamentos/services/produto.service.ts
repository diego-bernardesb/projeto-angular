import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = '/api/products';

  constructor(
    private httpCliente: HttpClient
  ) {}

  listProduct(): Observable<Produto[]>{
    return this.httpCliente.get<Produto[]>(this.API)
    .pipe(
      first(),
      delay(800),
      tap(product => console.log(product))
    );
  }
  
}
