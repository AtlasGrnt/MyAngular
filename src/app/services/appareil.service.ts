export class AppareilService{
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

      switchOnAll(){
          for(let appareil of this.appareils) {
              appareil.status = 'allumé'
          }
      }
      switchOffAll(){
          for(let appareil of this.appareils){
              appareil.status = 'éteint'
          }
      }
}