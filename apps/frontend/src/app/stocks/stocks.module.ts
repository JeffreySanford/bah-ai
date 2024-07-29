import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [StocksComponent],
  imports: [CommonModule, MaterialModule],
  exports: [StocksComponent],
})
export class StocksModule {}
