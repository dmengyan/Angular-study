import { Component, OnInit } from '@angular/core';
// import { DynamicFormComponent} from './dynamic-form/dynamic-form.component';

// 配置对象的每一项, 至少包含type类型和name名称
interface FormItemOption {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: string[];
}

@Component({
  selector: 'app-w5',
  templateUrl: './w5.component.html',
  styleUrls: ['./w5.component.css']
})
export class W5Component implements OnInit {

  config: FormItemOption[] = [
    {
      type: 'input',
      label: '猫咪昵称',
      name: 'name',
      placeholder: '请输入你家猫咪的名称'
    },
    {
      type: 'input',
      label: '猫咪年龄',
      name: 'age',
      placeholder: '请输入你家猫咪的年龄'
    },
    {
      type: 'select',
      label: '猫咪性别',
      name: 'male',
      options: ['男孩', '女孩'],
      placeholder: '请选择你家猫咪的性别'
    },
    {
      type: 'select',
      label: '猫咪品种',
      name: 'breed',
      options: ['中华田园猫', '英国短毛猫', '美国短毛猫', '布偶猫', '暹罗猫' , '其他'],
      placeholder: '请选择你家猫咪的品种'
    },
    {
      type: 'input',
      label: '猫咪肤色',
      name: 'color',
      placeholder: '请输入你家猫咪的肤色'
    },
    {
      type: 'input',
      label: '猫咪领养日期',
      name: 'date',
      placeholder: '年-月-日'
    },
    {
      type: 'input',
      label: '猫咪日常生活',
      name: 'daily life',
      placeholder: '写点你家猫咪的日常吧'
    },
    {
      type: 'input',
      label: '猫咪破坏记录',
      name: 'daily life',
      placeholder: '偶尔吐槽一下吧'
    },
    {
      type: 'input',
      label: '猫咪暖心时刻',
      name: 'daily life',
      placeholder: '写点猫咪的温暖你的瞬间吧'
    },
    {
      type: 'input',
      label: '铲屎官',
      name: 'owner',
      placeholder: '光荣的铲屎官，留下你的名字吧'
    },
    {
      type: 'button',
      label: '保存',
      name: 'submit'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  formSubmitted(value: any) {
    console.log(value);
  }

}
