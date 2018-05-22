import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css'],
  providers: [ AdService ]
})

export class C4Component implements OnInit {
  ads: AdItem[];
  constructor(
    private adService: AdService
  ) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
