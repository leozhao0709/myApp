import { Injectable, EventEmitter } from '@angular/core';
import { Option } from './option';
import { OptionsEnum } from './options.enum';

@Injectable()
export class OptionsService {

  private _options: Option[] = [];
  optionsChanged = new EventEmitter<Option[]>();

  constructor() {
    const optionsJson = localStorage.getItem(OptionsEnum.optionsStorageKey);
    this._options = optionsJson ? JSON.parse(optionsJson) : [];
  }


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

  removeOptionWithName(name: string) {
    this._options = this._options.filter((option: Option) => {
      return option.name !== name;
    });
    this.optionsChanged.emit(this._options.slice());
  }

  removeOptionWithIndex(index: number) {
    this._options.splice(index, 1);
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

  saveOptionsToLocal() {
    localStorage.setItem(OptionsEnum.optionsStorageKey, JSON.stringify(this._options));
  }
}
