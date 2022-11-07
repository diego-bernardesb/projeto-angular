import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable<Produto[]>;
  displayedColumns = [
    'name',
    'category',
    'quantity'
    // 'price'
  ];

  constructor(
    private produtoService: ProdutoService,
    public dialog: MatDialog
    ) {
      this.produtos$ = this.produtoService.listProduct()
      .pipe(
        catchError(error => {
          this.showError();
          return of([]);
        })
      );
    }

    showError() {
      this.dialog.open(ErrorDialogComponent);
    }
    
  ngOnInit(): void {
  }

}
