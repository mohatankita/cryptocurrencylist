import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCheckboxModule, MatPaginatorModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng5SliderModule } from'ng5-slider';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { PriceViewComponent } from './price-view/price-view.component';
import { ComparecurrencyComponent } from './comparecurrency/comparecurrency.component';
import { SortpipePipe } from './sortpipe.pipe';
import { ChartsModule } from 'ng2-charts';
import { DetailCryptoCurrencyComponent } from './detail-crypto-currency/detail-crypto-currency.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent,
    PriceViewComponent,
    ComparecurrencyComponent,
    SortpipePipe,
    DetailCryptoCurrencyComponent,
    FavoriteComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ChartsModule,
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    ToastrModule.forRoot({
      tapToDismiss: true,
      preventDuplicates: true,
      progressBar:true,
      closeButton:true,
      onActivateTick: true,
      easeTime: 0.5,
      toastClass: "toast"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

