import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


/* classe para organizar importes do angular material */
@NgModule({
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatCardModule
  ]
})
export class MaterialFeatureModule { }
