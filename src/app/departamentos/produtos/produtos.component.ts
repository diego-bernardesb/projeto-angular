import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [
    { _id: 1 ,name: 'lapis', category: 'escritorio', quantity: 150, price: 1.50 },
    { _id: 1 ,name: 'caneta', category: 'escritorio', quantity: 450, price: 2.50 },
    { _id: 1 ,name: 'borracha', category: 'escritorio', quantity: 50, price: 0.50 },
    { _id: 1 ,name: 'resma de papel', category: 'escritorio', quantity: 40, price: 24.50 },
    { _id: 1 ,name: 'grampeador', category: 'escritorio', quantity: 20, price: 14.50 }
  ];
  displayedColumns = [
    'name',
    'category',
    'quantity',
    'price'
  ];
  constructor() {
  }
  ngOnInit(): void {
  }

}
