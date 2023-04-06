import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  fullName: String = "Grynchenko Nikita";
  email: String = "nikita.grynch@gmail.com";
  phoneNumber: String = "+3801231122";
  city: String = "Odessa";
  country: String = "Ukraine";
  skills: String[] = [
    ".NET",
    "JS",
    "Python",
    "SQL"
  ]
  workExperience: any[] = [
    {
      title: "Firefly Web Project",
      year: 2022
    },
    {
      title: "Scholarships IOS App",
      year: 2023
    }
  ]
  links: any[] = [
    {
      title: "GitHub",
      url: "https://github.com/nikitaGrynch"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/nikita-grynchenko-0491ab232"
    }
  ]
}
