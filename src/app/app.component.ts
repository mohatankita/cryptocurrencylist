import { Component } from '@angular/core';
import { CryptoserviceService } from './cryptoservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public globalList: any = [];
  
  constructor( private cryptoservice: CryptoserviceService, private router: Router, private _route: ActivatedRoute) { }

  public getGlobalData(): any {
    this.cryptoservice.getGlobalData().subscribe(
      data => {
        this.globalList = data;
      }
    )
  }

  public displaypage(): any {
    let favId = localStorage.getItem("favoriteId");
    if(favId){
      this.router.navigate(['/favorite']);
    } else {
      this.router.navigate(['cryptocurrencylist']);
    }
  }

  ngOnInit(): any {
    this.getGlobalData();
    this.displaypage();
  }
}