import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialFeatureModule } from '../shared/material-feature/material-feature.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    MaterialFeatureModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
