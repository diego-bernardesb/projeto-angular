import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns = [
    'name',
    'category',
    'quantity',
    'price'
  ];

  constructor(
    private produtoService: ProdutoService
  ) {}
  
  ngOnInit(): void {
    this.produtos = this.produtoService.listProduct();
  }

}
