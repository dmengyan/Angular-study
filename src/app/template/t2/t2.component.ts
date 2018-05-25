import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styleUrls: ['./t2.component.css']
})
export class T2Component implements OnInit {
  canSave = true;
  isUnchanged = true;
  isSpecial = true;
  isPadding = true;
  hero = Hero.heroes[1];
  currentClasses: {};
  currentStyles: {};

  // 自定义指令 高亮
  color: string;

  // demo
  jgbStyles: {};

  isLong = true;
  isBig = true;

  setCurrentClasses() {
    this.currentClasses =  {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special':  this.isSpecial
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'color':  this.canSave      ? 'white' : 'pink',
      'font-size': !this.isUnchanged ? '20px'   : '14px',
      'background':   this.isSpecial    ? '#333'   : 'normal',
      'padding': this.isPadding ? '0 5px' : '0px'
    };
  }

  constructor() { }

  ngOnInit() {
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.color = 'pink';
  }

  big() {
    this.isLong = true;
    this.isBig = true;
    this.setJgbStyles();
  }
  samll() {
    this.isLong = false;
    this.isBig = false;
    this.setJgbStyles();
  }

  setJgbStyles() {
    this.jgbStyles = {
      'width': this.isLong ? '600px' : '200px',
      'height': this.isBig ? '40px' : '30px'
    };
  }

}
