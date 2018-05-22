import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroTaxReturn } from '../hero';
import { TaxReturnService } from './tax-return.service';

@Component({
  selector: 'app-tax-return',
  templateUrl: './tax-return.component.html',
  styleUrls: [ './tax-return.component.css' ],
  providers: [ TaxReturnService ]
})
export class TaxReturnComponent {
  message = '';
  @Output() close = new EventEmitter<void>();

  get taxReturn(): HeroTaxReturn {
    return this.heroTaxReturnService.taxReturn;
  }
  @Input()
  set taxReturn (htr: HeroTaxReturn) {
    this.heroTaxReturnService.taxReturn = htr;
  }

  constructor(private heroTaxReturnService: TaxReturnService ) { }

  onCanceled()  {
    this.flashMessage('Canceled');
    this.heroTaxReturnService.restoreTaxReturn();
  };

  onClose()  { this.close.emit(); };

  onSaved() {
    this.flashMessage('Saved');
    this.heroTaxReturnService.saveTaxReturn();
  }

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }
}
