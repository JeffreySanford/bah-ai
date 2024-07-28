import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { StockMoversComponent } from './stock-movers/stock-movers.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StocksModule } from './stocks/stocks.module';

@NgModule({
  declarations: [AppComponent, StockMoversComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MaterialModule,
    StocksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
