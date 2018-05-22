import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-w2',
  templateUrl: './w2.component.html',
  styleUrls: ['./w2.component.css']
})
export class W2Component {

  skills = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5'];
  demo = new Hero( 12, 'Ben', '26', this.skills[2]);
  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.demo = new Hero(13, '', '', '' );
  }


}
