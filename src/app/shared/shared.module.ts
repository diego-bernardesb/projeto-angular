import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialFeatureModule } from '../shared/material-feature/material-feature.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialFeatureModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
