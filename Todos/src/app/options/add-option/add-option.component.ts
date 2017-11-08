import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OptionsService } from '../options.service';
import { Option } from '../option';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss'],
})
export class AddOptionComponent implements OnInit {

  addoptionForm: FormGroup;
  emptyOption: boolean;

  constructor(private _optionsService: OptionsService, ) { }

  ngOnInit() {
    this.addoptionForm = new FormGroup({
      'option': new FormControl(null, [Validators.required, this.forbiddenExistOption.bind(this)]),
    });
  }

  onSubmit() {
    if (this.addoptionForm.valid) {
      const optionName = (<string>this.addoptionForm.get('option').value).trim();
      this._optionsService.addOption(optionName);
      this.addoptionForm.reset();
    }
  }

  forbiddenExistOption(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const optionName = (<string>control.value).trim();
      if (this._optionsService.optionExist(optionName)) {
        return { 'optionExist': true };
      }
    }
    return null;
  }

}
