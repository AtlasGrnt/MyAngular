import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnIinit {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 1000
      );
    }
  )

  appareils: any[];

  constructor(private appareilService: AppareilService){
    setTimeout(
      () => {
        this.isAuth = true
      }, 4000
    );
  }
  ngOnInit(){
    this.appareils = this.appareilService.appareils
  }
  onAllumer(){
    console.log('Allumage en cours');
  }
  onEteindre(){
    console.log('Extinction en cours');
  }
}

