import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() taskName: string;
  @Input() index: number;

  constructor(private _optionsService: OptionsService, ) { }

  ngOnInit() {
  }

  onRemove() {
    this._optionsService.removeOption(this.taskName);
  }
}
