import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Address, Hero, states } from './hero-data';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-w3',
  templateUrl: './w3.component.html',
  styleUrls: ['./w3.component.css']

})
export class W3Component implements OnChanges {
  @Input() hero: Hero;
  myForm: FormGroup;
  states = states;
  // hero: Hero;

  constructor(
    private formBuilder: FormBuilder,
    private  heroService: HeroService
  ) {
    this.creatForm();
  }

  ngOnChanges() {
    this.rebuildForm();
  }
  // 创建表单模型
  creatForm() {
    this.myForm = this.formBuilder.group({ // <-- the parent FormGroup
      name: ['', Validators.required ],
      secretLairs: this.formBuilder.array([]), // <-- a FormGroup with a new address
      power: '',
      sidekick: ''
    });
  }
  // 获取地址
  get secretLairs(): FormArray {
    return this.myForm.get('secretLairs') as FormArray;
  };
   // 添加地址
  addLair() {
    this.secretLairs.push(this.formBuilder.group(new Address()));
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.formBuilder.group(address));
    const addressFormArray = this.formBuilder.array(addressFGs);
    this.myForm.setControl('secretLairs', addressFormArray);
  }
  // 更新表单
  rebuildForm() {
    this.myForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  prepareSaveHero(): Hero {
    const formModel = this.myForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }
  // 重置
  revert() { this.rebuildForm(); }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.rebuildForm();
  }

}
