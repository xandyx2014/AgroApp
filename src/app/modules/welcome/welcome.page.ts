import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/images/welcome/cow.svg',
      titulo: 'Ganaderia',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.'
    },
    {
      img: '/assets/images/welcome/agronomy.svg',
      titulo: 'Agricultura',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.'
    },
    {
      img: '/assets/images/welcome/service.svg',
      titulo: 'Servicios',
      desc: 'Lorem, ipsum dolor.Lorem, ipsum dolor.'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/home']);
  }
}
