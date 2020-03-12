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
        'position': 'Associate Software Engineer',
        'yom': '2 Years 2 Months (1st June, 2016 to 31st July, 2018)',
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
      }, 
      {
        'domain': 'Application development, o9 Platform',
        'name': 'o9 Solutions (Contracted by MIPL)',
        'position': 'Software Engineer - Python',
        'yom': '6 Months (18th Feb, 2019 to 31st July, 2019)',
        'projects': [
          {
            'name': 'Tenant Extractor',
            'discription': 'Data extraction from the platform tenants json file.',
            'responsibility': 'Complete end to end development of this system app. Data mining and extraction of important data from the hugh data present in the tenant config file and present this data as sqlite file, csv files and xlsx files.',
            'role': 'Developer',
            'tools': 'Python, Data mining, sqlite, pandas'
          }
        ]
      },
      {
        'domain': 'Application development, o9 Platform',
        'name': 'o9 Solutions',
        'position': 'Senior Software engineer',
        'yom': '8 Months (1st Aug, 2019 to 20th March, 2020)',
        'projects': [
          {
            'name': 'Tenant Builder',
            'discription': 'Build tenant using APIs calls using the data extracted from Tenant Extractor app.',
            'responsibility': 'Complete end to end development of this system app. Create DDL queries using the data extracted from the Tenant Extractor app and pass this DDLs using an API call.',
            'role': 'Developer',
            'tools': 'Python, sqlite, Antlr, WebAPIs'
          },
          {
            'name': 'Rule Creator',
            'discription': 'Used for creating multiple rules in the o9 Platform.',
            'responsibility': 'In o9 Platform, we were unable to create multiple rules at a time. This app takes multiple rules and add them using Web APIs calls.',
            'role': 'Developer',
            'tools': 'Python, Antlr, WebAPIs'
          },
          {
            'name': 'Demand Netting Plugin',
            'discription': 'Used to calculate the demand netting for given Order, Forecast and RTF data.',
            'responsibility': 'Following the concept of netting, this plugins helps in the consumption of order quantity from the given forecast and RTF to specify the order type.',
            'role': 'Developer',
            'tools': 'Python, Pandas'
          }
        ]
      }
    ]
  }

  ngOnInit() {
  }

}
