import { Component, OnInit } from '@angular/core';
import { Option } from './option';
import { OptionsService } from './options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  options: Option[];

  constructor(private _optionsService: OptionsService, ) {
    this.options = this._optionsService.options;
  }

  ngOnInit() {
    this._optionsService.optionsChanged.subscribe((options: Option[]) => {
      this.options = options;
    });
  }

  onRemoveAllOptions() {
    this._optionsService.removeAllOptions();
  }
}
