import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private httpCliente: HttpClientModule
  ) {}

  listProduct(): Produto[]{
    return [
      { _id: 1 ,name: 'lapis', category: 'escritorio', quantity: 150, price: 1.50 },
      { _id: 1 ,name: 'caneta', category: 'escritorio', quantity: 450, price: 2.50 },
      { _id: 1 ,name: 'borracha', category: 'escritorio', quantity: 50, price: 0.50 },
      { _id: 1 ,name: 'resma de papel', category: 'escritorio', quantity: 40, price: 24.50 },
      { _id: 1 ,name: 'grampeador', category: 'escritorio', quantity: 20, price: 14.50 }
    ]
  }
  
}
