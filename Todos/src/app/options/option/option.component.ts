import { Component, OnInit, ViewEncapsulation, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { OptionsService } from '../options.service';
import { fadeTrigger } from '../../animations/fade';
import { slideTrigger } from '../../animations/slide';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  animations: [
    fadeTrigger
  ]
})
export class OptionComponent implements OnInit {
  @HostBinding('@fadeTriggerState') fade = true;

  @Input() taskName: string;
  @Input() index: number;

  constructor(private _optionsService: OptionsService, ) { }

  ngOnInit() {
  }

  onRemove() {
    this._optionsService.removeOptionWithIndex(this.index - 1);
  }
}
