/* --- Angular --- */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* --- Configuration --- */
import { CONFIGURATION } from './home.component.configuration';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public localeStrings: any;

  constructor(private router: Router) {
    this.localeStrings = CONFIGURATION.localeStrings[CONFIGURATION.defaultLanguageLocaleId];
  }

  goContact() {
    this.router.navigate(['contact']);
  }

  ngOnInit() {
  }

}
