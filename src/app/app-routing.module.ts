import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { PriceViewComponent } from './price-view/price-view.component';
import { ComparecurrencyComponent } from './comparecurrency/comparecurrency.component';
import { DetailCryptoCurrencyComponent } from './detail-crypto-currency/detail-crypto-currency.component';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: 'cryptocurrencylist', component: CryptocurrencyComponent },
  { path: 'priceview/:id', component: PriceViewComponent },
  { path: 'compareCurrency', component: ComparecurrencyComponent },
  { path: 'detail/:id', component: DetailCryptoCurrencyComponent },
  { path: 'favorite', component: FavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
