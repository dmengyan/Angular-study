import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <!--<h3>为你喜欢的英雄投票吧！</h3>-->
      <h4>{{data.name}}</h4>
      <p>{{data.bio}}</p>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}


