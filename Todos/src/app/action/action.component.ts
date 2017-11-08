import { Component, OnInit } from '@angular/core';
import { Option } from '../options/option';
import { OptionsService } from '../options/options.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {

  options: Option[];

  constructor(private _optionsService: OptionsService, ) {
    this.options = this._optionsService.options;
  }

  ngOnInit() {
    this._optionsService.optionsChanged.subscribe((options: Option[]) => {
      this.options = options;
    });
  }

  onClick() {
    const randomNum = Math.floor(Math.random() * this.options.length);
    const option = this.options[randomNum];
    alert(option.name);
  }

}
