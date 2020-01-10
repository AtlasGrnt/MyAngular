import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareils = [
    {
      name: 'Ordinateur',
      status: 'allumé',
      position: 'Bureau'
    },
    {
      name: 'Télévision',
      status: 'éteint',
      position: 'Chambre'
    },
    {
      name: 'Lampe',
      status: 'éteint',
      position: 'Salon'
    }
  ];
  constructor(){
    setTimeout(
      () => {
        this.isAuth = true
      }, 4000
    );
  }
  onAllumer(){
    console.log('Allumage en cours');
  }
  onEteindre(){
    console.log('Extinction en cours');
  }
}

