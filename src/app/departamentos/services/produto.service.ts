import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = '/assets/api.json';

  constructor(
    private httpCliente: HttpClient
  ) {}

  listProduct(): Observable<Produto[]>{
    return this.httpCliente.get<Produto[]>(this.API);
  }
  
}
