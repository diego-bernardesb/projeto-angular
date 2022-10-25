import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialFeatureModule } from '../shared/material-feature/material-feature.module';
import { SharedModule } from '../shared/shared.module';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';


@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    MaterialFeatureModule,
    SharedModule
  ]
})
export class DepartamentosModule { }
