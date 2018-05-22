import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdItem } from '../ad-item';
interface AdComponent {
  data: any;
}

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];
  interval: any;
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 6000);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];
    const componentFactory
      = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
