import { Injectable, EventEmitter } from '@angular/core';
import { Option } from './option';

@Injectable()
export class OptionsService {

  private _options: Option[] = [];
  optionsChanged = new EventEmitter<Option[]>();

  constructor() { }


  public get options(): Option[] {
    return this._options.slice();
  }

  addOption(optionName: string) {
    this._options.push(new Option(optionName));
    this.optionsChanged.emit(this._options.slice());
  }

  removeAllOptions() {
    this._options = [];
    this.optionsChanged.emit(this._options.slice());
  }

  removeOption(name: string) {
    this._options = this._options.filter((option: Option) => {
      return option.name !== name;
    });
    this.optionsChanged.emit(this._options.slice());
  }

  optionExist(optionName: string): boolean {
    for (const value of this._options) {
      if (value.name === optionName) {
        return true;
      }
    }
    return false;
  }
}
