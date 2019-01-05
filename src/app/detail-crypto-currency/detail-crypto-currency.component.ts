import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CryptoserviceService } from '../cryptoservice.service';

@Component({
  selector: 'app-detail-crypto-currency',
  templateUrl: './detail-crypto-currency.component.html',
  styleUrls: ['./detail-crypto-currency.component.css']
})
export class DetailCryptoCurrencyComponent implements OnInit {

  cryptocurrencyDetail: any = [];

  constructor(
    private route: ActivatedRoute,
    private cryptoService: CryptoserviceService) { }

  ngOnInit() {
    this.getCoinDetail();
  }

  getCoinDetail(): void {
    const id = this.route.snapshot.paramMap.get('id').toString();
    this.cryptoService.getCoinDetail(id).subscribe(
      coindata => {
        this.cryptocurrencyDetail = coindata;
        console.log(coindata);
      }
    )
  }
}
