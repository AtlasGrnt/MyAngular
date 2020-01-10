import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareilOne = 'Ordinateur';
  appareilTwo = 'Lampe';
  appareilThree = 'Télévisions';
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

