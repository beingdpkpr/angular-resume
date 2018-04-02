/* --- Angular --- */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public specialization: any = [
    {
      'image': '../../../../../assets/images/cert/spe1.jpg',
      'title': 'Python for Everybody',
      'university': 'University of Michigan',
      'url': 'https://www.coursera.org/account/accomplishments/specialization/certificate/UMHX9HMEFYZ6'
    },
    {
      'image': '../../../../../assets/images/cert/python1-1.jpg',
      'title': 'Getting Started with Python',
      'university': 'University of Michigan',
      'url': 'https://www.coursera.org/account/accomplishments/certificate/F29FV3UC9NSU'
    },
    {
      'image': '../../../../../assets/images/cert/python2-1.jpg',
      'title': 'Python Data Structures',
      'university': 'University of Michigan',
      'url': 'https://www.coursera.org/account/accomplishments/certificate/B9TUDRJRDRMM'
    },
    {
      'image': '../../../../../assets/images/cert/python3-1.jpg',
      'title': 'Using Python to Access Web Data',
      'university': 'University of Michigan',
      'url': 'https://www.coursera.org/account/accomplishments/certificate/4BYNZT4XLYM6'
    },
    {
      'image': '../../../../../assets/images/cert/python4-1.jpg',
      'title': 'Using Databases with Python',
      'university': 'University of Michigan',
      'url': 'https://www.coursera.org/account/accomplishments/certificate/ELRKSWCFW6HG'
    },
    {
      'image': '../../../../../assets/images/cert/python5-1.jpg',
      'title': 'Retrieving, Processing, and Visualizing Data with Python',
      'university': 'University of Michigan',
      'url': 'https://www.coursera.org/account/accomplishments/certificate/QEXUR86WJK2A'
    },
    {
      'image': '../../../../../assets/images/cert/blockchain-1.jpg',
      'title': 'IBM Blockchain Foundation for Developers',
      'university': 'IBM',
      'url': 'https://www.coursera.org/account/accomplishments/certificate/CQRKEMJ5S7MR'
    },
    {
      'image': '../../../../../assets/images/cert/ui-cert-1.jpg',
      'title': 'Programming Foundations with JavaScript, HTML and CSS',
      'university': 'Duke University',
      'url': 'https://www.coursera.org/account/accomplishments/certificate/GFYAS78H7D7L'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
