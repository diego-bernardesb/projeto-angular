import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialFeatureModule } from '../shared/material-feature/material-feature.module';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';


@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    MaterialFeatureModule
  ]
})
export class DepartamentosModule { }
