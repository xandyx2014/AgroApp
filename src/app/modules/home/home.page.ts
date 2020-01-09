import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayTitulos = [
    'Ganaderia',
    'Agricultura',
    'Servicios'
  ];
  constructor(
    private router: Router
  ) {}
  navigate(url: string) {
    this.router.navigate([url]);
  }
}
