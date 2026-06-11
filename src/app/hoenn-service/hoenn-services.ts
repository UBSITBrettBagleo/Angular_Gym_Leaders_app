import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class HoennService {
  private leaders = signal([
    {
      name: 'Roxanne',
      badge: 'Strone Badge',
      location: 'Rustboro City',
      specialty: 'Rock',
      team: ['Geodude', 'Nosepass']
    },
    {
    name: 'Brawly',
    badge: 'Knuckle Badge',
    location: 'Dewford Town',
    specialty: 'Fighting',
    team: ['Machop', 'Makuhita']
    },
    {
      name: 'Wattson',
      badge: 'Dynamo Badge',
      location: 'Mauville City',
      specialty: 'Electric',
      team: ['Magnemite', 'Voltorb', 'Manectric']
    },
    {
      name: 'Flannery',
      badge: 'Heat Badge',
      location: 'Lavaridge Town',
      specialty: 'Fire',
      team: ['Slugma', 'Torkoal']
    },
    {
      name: 'Norman',
      badge: 'Balance Badge',
      location: 'Petalburg City',
      specialty: 'Normal',
      team: ['Slaking', 'Vigoroth']
    },
    {
      name: 'Winona',
      badge: 'Feather Badge',
      location: 'Fortree City',
      specialty: 'Flying',
      team: ['Swellow', 'Pelipper', 'Altaria']
    },
    {
      name: 'Tate & Liza',
      badge: 'Mind Badge',
      location: 'Mossdeep City',
      specialty: 'Psychic',
      team: ['Solrock', 'Lunatone']
    },
    {
      name: 'Juan',
      badge: 'Rain Badge',
      location: 'Sootopolish City',
      specialty: 'Water',
      team: ['Whiscash', 'Sealeo', 'Kingdra']
    },
     
  ])

  gymLeaders = this.leaders.asReadonly()
}


