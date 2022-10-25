import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Observable<Produto[]>;
  displayedColumns = [
    'name',
    'category',
    'quantity',
    'price'
  ];

  constructor(
    private produtoService: ProdutoService
    ) {
      this.produtos = this.produtoService.listProduct();
    }
    
  ngOnInit(): void {
  }

}
