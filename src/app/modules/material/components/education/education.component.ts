/* --- Angular --- */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public degrees: any;

  constructor() {
    this.degrees = [
      {
        'branch': 'Computer Science & Engineering',
        'from': 'Sri Jayachamarajendra College of Engineering, Mysore (SJCE)',
        'grade': '8.01',
        'name': 'Bachelor of Engineering',
        'projects': [
          {
            'name': 'Gender Recognition based on Palm-print.',
            'discription': 'Palm-print image was captured for an individual and based on the dimension of the palm, the gender of the individual was categorised.',
            'subject': 'Pattern Recognition',
            'used': 'Matlab.'
          },
          {
            'discription': 'Congestion in a network was controlled using Priority based load-shading.',
            'name': 'Congestion Control',
            'subject': 'Computer Networks',
            'used': 'C programming.'
          },
          {
            'discription': 'Text and Video based learning / tutorial website for Students.',
            'name': 'Web Tutorial',
            'subject': 'Web Technologies',
            'used': 'HTML, CSS and JAVASCRIPT.'
          }
        ],
        'yop': '2016'
      },
      {
        'achievement': ['Merit scored in Mathematics.', 'Participated in Regional level Mathematics Exhibition.'],
        'branch': 'Class XII with Science (CBSE)',
        'from': 'Jawahar Navodaya Vidyalaya, Bishnupur (JNV).',
        'grade': '89.8',
        'name': 'All India Senior Secondary Certificate Examination (AISSCE)',
        'yop': '2011'
      },
      {
        'achievement': ['Regional level Table Tennis player.'],
        'branch': 'Class X (CBSE)',
        'from': 'Jawahar Navodaya Vidyalaya, Bishnupur (JNV).',
        'grade': '88.8',
        'name': 'All India Secondary Certificate Examination (AISCE)',
        'yop': '2009'
      }
    ]
  }

  ngOnInit() {
  }

}
