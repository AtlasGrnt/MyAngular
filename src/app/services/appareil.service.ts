export class AppareilService{
    appareils = [
        {
          id: 1,
          name: 'Ordinateur',
          status: 'éteint',
          position: 'Bureau'
        },
        {
          id: 2,
          name: 'Télévision',
          status: 'éteint',
          position: 'Chambre'
        },
        {
          id: 3,
          name: 'Lampe',
          status: 'éteint',
          position: 'Salon'
        }
      ];

      getAppareilById(id: number){
          const appareil = this.appareils.find(
              (appareilObject) => {
                  return appareilObject.id === id;
              }
          );
          return appareil;
      }

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
      switchOnOne(index: number){
          this.appareils[index].status = 'allumé';
      }
      switchOffOne(index: number){
          this.appareils[index].status='éteint';
      }
}