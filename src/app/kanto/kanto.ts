import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css'
})
export class Kanto {

  leaders = signal([

    {
      name:'Brock',
      emoji:'🌑',
      age:25,
      badge:'Boulder Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffpqjy-208bd991-a8d5-4b6f-b839-6c6501070e1d.png/v1/fill/w_1280,h_1280/boulder_badge_by_jormxdos_dffpqjy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcHFqeS0yMDhiZDk5MS1hOGQ1LTRiNmYtYjgzOS02YzY1MDEwNzBlMWQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.08tmT_YnWtGITsMroWGGkOTtucVq9B72YvKyc9d2j7M',
      location:'Pewter City',
      type:'Rock',
      typeColor:'#A38C21',
      description:'Rock-hard determination crushes all obstacles!',
      image:'https://static.wikia.nocookie.net/project-polaro-alpha/images/5/5a/1st_Leader.png/revision/latest/scale-to-width/360?cb=20260212030913',
      team:[
        { pokemon:'Geodude', type:'Rock/Ground', level:12 },
        { pokemon:'Onix', type:'Rock/Ground', level:14 }
      ]
    },
    
    {
      name:'Misty',
      emoji:'🌊',
      age:24,
      badge:'Cascade Badge',
      badgeImage:'https://static.wikia.nocookie.net/pokemon/images/9/9c/Cascade_Badge.png/revision/latest?cb=20241015140805',
      location:'Cerulean City',
      type:'Water',
      typeColor:'#6890F0',
      description:'The tides of battle always flow in my favor!',
      image:'https://static.wikia.nocookie.net/project-polaro-alpha/images/f/f0/Misty.png/revision/latest/thumbnail/width/360/height/360?cb=20260212032110',
      team:[
        { pokemon:'Staryu', type:'Water', level:18 },
        { pokemon:'Starmie', type:'Water/Psychic', level:21 }
      ]
    },
    
    {
      name:'Lt. Surge',
      emoji:'⚡',
      age:40,
      badge:'Thunder Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dgi1rpj-0ac193a0-a211-4b12-8454-d5efd8c12716.png/v1/fill/w_1280,h_1280/surge_badge_by_jormxdos_dgi1rpj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGdpMXJwai0wYWMxOTNhMC1hMjExLTRiMTItODQ1NC1kNWVmZDhjMTI3MTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VxX3Dr4chXFE3EgqeDa5oTpVCR_QPRhIvHjRJyq7bxM',
      location:'Vermilion City',
      type:'Electric',
      typeColor:'#F8D030',
      description:'Prepare to be shocked by overwhelming power!',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqX3rRX3l6_ptNyHpggv5X8VWrEnjlLdGDQ&s',
      team:[
        { pokemon:'Voltorb', type:'Electric', level:21 },
        { pokemon:'Pikachu', type:'Electric', level:18 },
        { pokemon:'Raichu', type:'Electric', level:24 }
      ]
    },
    
    {
      name:'Erika',
      emoji:'🌸',
      age:28,
      badge:'Rainbow Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffprjy-92a00683-bbc0-4490-8c8e-722ecaf42b84.png/v1/fill/w_1280,h_1280/rainbow_badge_by_jormxdos_dffprjy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcHJqeS05MmEwMDY4My1iYmMwLTQ0OTAtOGM4ZS03MjJlY2FmNDJiODQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._IAmJX2DJsYF_tbwN4D7Z7n8bhN9YIh9EQJB4W0PWXk',
      location:'Celadon City',
      type:'Grass',
      typeColor:'#78C850',
      description:'The beauty of nature conceals incredible strength.',
      image:'https://static.wikia.nocookie.net/project-polaro-alpha/images/c/c0/Erika.png/revision/latest/thumbnail/width/360/height/360?cb=20260212032138',
      team:[
        { pokemon:'Victreebel', type:'Grass/Poison', level:29 },
        { pokemon:'Tangela', type:'Grass', level:24 },
        { pokemon:'Vileplume', type:'Grass/Poison', level:29 }
      ]
    },
    
    {
      name:'Janine',
      emoji:'☠️',
      age:18,
      badge:'Soul Badge',
      badgeImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YvOP7Y08aD5sktWaORYY3eaKNbOeKb2RGw&s',
      location:'Fuchsia City',
      type:'Poison',
      typeColor:'#A040A0',
      description:'A true ninja strikes before you know it.',
      image:'https://i.redd.it/day-63-of-janine-posts-until-she-gets-the-ex-or-alt-she-v0-4xbwfq89d8nc1.png?width=720&format=png&auto=webp&s=a7157e38d73757ece5f565fb3c6793296f7feb3b',
      team:[
        { pokemon:'Crobat', type:'Poison/Flying', level:36 },
        { pokemon:'Weezing', type:'Poison', level:36 },
        { pokemon:'Ariados', type:'Bug/Poison', level:33 },
        { pokemon:'Venomoth', type:'Bug/Poison', level:39 }
      ]
    },
    
    {
      name:'Sabrina',
      emoji:'🔮',
      age:26,
      badge:'Marsh Badge',
      badgeImage:'https://www.nicepng.com/png/full/367-3679600_marsh-badge-pokemon-sabrina-badge.png',
      location:'Saffron City',
      type:'Psychic',
      typeColor:'#F85888',
      description:'Your future defeat has already been foreseen.',
      image:'https://static.wikia.nocookie.net/project-polaro-alpha/images/3/3c/Sabrina.png/revision/latest/thumbnail/width/360/height/360?cb=20260212032215',
      team:[
        { pokemon:'Kadabra', type:'Psychic', level:38 },
        { pokemon:'Mr. Mime', type:'Psychic/Fairy', level:37 },
        { pokemon:'Venomoth', type:'Bug/Poison', level:38 },
        { pokemon:'Alakazam', type:'Psychic', level:43 }
      ]
    },
    
    {
      name:'Blaine',
      emoji:'🔥',
      age:60,
      badge:'Volcano Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18087af6-9cff-463c-8216-a29d1bad80b9/d3agaep-9546d9d7-9279-4963-aae0-b2fe06c98869.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8xODA4N2FmNi05Y2ZmLTQ2M2MtODIxNi1hMjlkMWJhZDgwYjkvZDNhZ2FlcC05NTQ2ZDlkNy05Mjc5LTQ5NjMtYWFlMC1iMmZlMDZjOTg4NjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.17t4TADBpMFrwxMqn6nXDHKpBUupCjo2bhYdeAj01SU',
      location:'Cinnabar Island',
      type:'Fire',
      typeColor:'#F08030',
      description:'My burning passion blazes hotter than any volcano!',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXW-Jqm3p9c4DcYs3FuDlrqEhf46FOsomedw&s',
      team:[
        { pokemon:'Magcargo', type:'Fire/Rock', level:45 },
        { pokemon:'Magmar', type:'Fire', level:45 },
        { pokemon:'Rapidash', type:'Fire', level:50 }
      ]
    },
    
    {
      name:'Giovanni',
      emoji:'🌎',
      age:42,
      badge:'Earth Badge',
      badgeImage:'https://static.stands4.com/images/symbol/2158_earth-badge.png',
      location:'Viridian City',
      type:'Ground',
      typeColor:'#E0C068',
      description:'My power and ambition will shape the world.',
      image:'https://static.wikia.nocookie.net/project-polaro-alpha/images/f/f2/Giovanni.png/revision/latest?cb=20240613053517',
      team:[
        { pokemon:'Dugtrio', type:'Ground', level:42 },
        { pokemon:'Nidoqueen', type:'Poison/Ground', level:44 },
        { pokemon:'Nidoking', type:'Poison/Ground', level:45 },
        { pokemon:'Rhydon', type:'Ground/Rock', level:50 }
      ]
    }
    
    ]);
  }