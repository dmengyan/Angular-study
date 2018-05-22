import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      // new AdItem(HeroProfileComponent, {name: '凯', bio: '战士'}),
      // new AdItem(HeroProfileComponent, {name: '后羿', bio: '射手'}),
      new AdItem(HeroJobAdComponent,   {headline: '《避免》',
        body: '你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。'}),
      new AdItem(HeroJobAdComponent,   {headline: '《门前》',
        body: '草在结它的种子，风在摇它的叶子。我们站着，不说话，就十分美好。'}),
      new AdItem(HeroJobAdComponent,   {headline: '《远和近》',
        body: '你，一会看我，一会看云。我觉得，你看我时很远，你看云时很近。'}),
      new AdItem(HeroJobAdComponent,   {headline: '《小巷》',
        body: '小巷 又弯又长 没有门 没有窗 我拿把旧钥匙 敲着厚厚的墙'}),
    ];
  }
}
