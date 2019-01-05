import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CryptoserviceService {

  public cryptoApi = "https://api.coingecko.com/api/v3/coins/";
  public globalApi = "https://api.coingecko.com/api/v3/global";
  public exchangeapi = "https://api.coingecko.com/api/v3/exchanges";

  constructor( private httpService: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    console.log(err.status);
    return Observable.throw(err.message);
  }

  getcryptocurrency(): any {
    let responsedata = this.httpService.get(this.cryptoApi + "markets?vs_currency=usd");
    return responsedata;
  }

  getprice(id): any {
    console.log(id);
    let priceresponse = this.httpService.get(this.cryptoApi + id + "/market_chart?vs_currency=usd&days=1");
    return priceresponse;
  }

  getGlobalData(): any {
    let globalresponse = this.httpService.get(this.globalApi);
    return globalresponse;
  }

  getCoinDetail(id: string): any {
    let detailCryptocurrency = this.httpService.get(this.cryptoApi + id);
    return detailCryptocurrency;
  }
}

