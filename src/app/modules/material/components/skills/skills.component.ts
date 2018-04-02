/* --- Angular --- */
import { Component, OnInit } from '@angular/core';

/* --- Configuration --- */
import { CONFIGURATION } from './skills.component.configuration';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public localeStrings: any;
  public skills: any;
  
  constructor() {

    this.localeStrings = CONFIGURATION.localeStrings[CONFIGURATION.defaultLanguageLocaleId];

    this.skills = [
      {
        'title': 'Professional Skills',
        'skill': [
          {
            'name': 'JAVA',
            'star': 4
          },
          {
            'name': 'Python',
            'star': 4
          },
          {
            'name': 'C / C++',
            'star': 3
          },
          {
            'name': 'HTML, CSS & JS',
            'star': 4
          },
          {
            'name': 'Angular 5 & Bootstrap',
            'star': 3
          },
          {
            'name': 'Android',
            'star': 3
          },
          {
            'name': 'Docker',
            'star': 3
          },
          {
            'name': 'Elasticsearch & Redis',
            'star': 2
          },
          {
            'name': 'SVN, GIT',
            'star': 4
          },
          {
            'name': 'Splunk',
            'star': 3
          },
          {
            'name': 'Cloud Foundry',
            'star': 3
          }
        ]
      },
      {
        'title': 'Personal Skills',
        'skill': [
          {
            "name": "Communication",
            'star': 3
          },
          {
            "name": 'Team Work',
            'star': 5
          },
          {
            'name': 'Creativity',
            'star': 4
          },
          {
            'name': 'Dedication',
            'star': 4
          },
          {
            'name': 'Problem Solving',
            'star': 4
          },
          {
            'name': 'Troubleshoot and Debuging',
            'star': 3
          }
        ]
      },
      {
        'title': 'Development Environment',
        'skill': [
          {
            'name': 'Windows',
            'star': 4
          },
          {
            'name': 'Ubuntu',
            'star': 4
          }
        ]
      }
    ]

  }

  ngOnInit() {
  }

}
