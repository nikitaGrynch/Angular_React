import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  fullName: string = 'Grynchenko Nikita';
  nameColor: string = 'white';
  nameFontSize: string = '2em';
  email: string = 'Nikita.grynch@gmail.com';
  phoneNumber: string = '+3801231122';
  city: string = 'Odessa';
  country: string = 'Ukraine';
  skills: any[] = [
    {
      name: '.NET',
      isMain: true,
    },
    {
      name: 'JS',
      isMain: true,
    },
    {
      name: 'Python',
      isMain: false,
    },
    {
      name: 'SQL',
      isMain: false,
    },
  ];
  workExperience: any[] = [
    {
      title: 'Firefly web project',
      year: 2022,
    },
    {
      title: 'Scholarships IOS app',
      year: 2023,
    },
  ];
  links: any[] = [
    {
      title: 'GitHub',
      url: 'https://github.com/nikitaGrynch',
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/nikita-grynchenko-0491ab232',
    },
  ];
}
