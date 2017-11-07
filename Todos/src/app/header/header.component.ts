import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Indescision';
  @Input() subtitle = 'Put your life in the hands of a computer';

  constructor() { }

  ngOnInit() {
  }

}
