import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public work: any;

  constructor() {
    this.work = [
      {
        'domain': 'Networking, Network security, DevOps and Application development',
        'name': 'PrimeSoft Solutions, Inc.',
        'position': 'Full Stack Developer',
        'yom': '21 Months (1st June, 2016 to Present)',
        'projects': [
          {
            'name': 'Google API integration with Python',
            'discription': 'Research and Integration of different services with the current Applications.',
            'responsibility': 'Data Research For YouTube API, Picasa web API, Google Calendar Api and Google Task API and integrate them.',
            'role': 'Developer',
            'tools': 'REST API calls, Oauth 2.0 and Python.'
          },
          {
            'name': 'Security Project',
            'discription': 'Security projects which help in protecting Enterprise critical assets using different modules namely gateway for assets and Controller for authentication.',
            'responsibility': 'Stabilization of old assets and addition of new assets',
            'role': 'Developer',
            'tools': 'JAVA (Eclipse), Docker, Tomcat'
          },
          {
            'name': 'Monitoring and Patching',
            'discription': 'Monitoring and reporting of errors related both on-premise and cloud Systems, Windows server patching using Shavlik, Sample Python Application to track patching related tasks.',
            'responsibility': 'Monitoring and reporting',
            'role': 'DevOps',
            'tools': 'Splunk, Microsoft Azure, Shavlik, Python.'
          },
          {
            'name': 'Attendance Management System',
            'discription': 'Attendance management system and visitor management system which would automate the whole attendance system in an Enterprise',
            'responsibility': 'Development of an android app',
            'role': 'Mobile Development',
            'tools': 'Android studio'
          }
        ]
      }
    ]
  }

  ngOnInit() {
  }

}
