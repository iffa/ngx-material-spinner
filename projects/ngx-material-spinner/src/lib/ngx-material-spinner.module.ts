import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaterialSpinnerComponent } from './ngx-material-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  declarations: [NgxMaterialSpinnerComponent],
  exports: [NgxMaterialSpinnerComponent],
})
export class NgxMaterialSpinnerModule {}
