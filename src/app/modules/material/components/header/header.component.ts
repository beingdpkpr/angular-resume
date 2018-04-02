/* --- Angular --- */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* --- Configuration --- */
import { CONFIGURATION } from './header.component.configuration';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public localeStrings: any;

  constructor(private router: Router) {
    this.localeStrings = CONFIGURATION.localeStrings[CONFIGURATION.defaultLanguageLocaleId];
  }

  ngOnInit() {
  }

  goLink(link: string) {
    this.router.navigate([link]);
  }

}
