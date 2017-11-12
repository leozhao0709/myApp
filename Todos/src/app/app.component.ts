import { Component, HostListener, HostBinding } from '@angular/core';
import { OptionsEnum } from './options/options.enum';
import { OptionsService } from './options/options.service';
import { fadeTrigger } from './animations/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeTrigger
  ]
})
export class AppComponent {

  constructor(private _optionsService: OptionsService, ) { }

  @HostListener('window:beforeunload')
  storeOption() {
    this._optionsService.saveOptionsToLocal();
  }
}
