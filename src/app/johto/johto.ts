import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports:[LeaderInfo],
  templateUrl:'./johto.html',
  styleUrl:'./johto.css'
})
export class Johto {

  leaders = signal([

    {
      name:'Falkner',
      emoji:'🦅',
      age:17,
      badge:'Zephyr Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq0h1-0dc16de6-28e1-490b-adf9-480503d1dbd3.png/v1/fill/w_1280,h_1280/zephyr_badge_by_jormxdos_dffq0h1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcTBoMS0wZGMxNmRlNi0yOGUxLTQ5MGItYWRmOS00ODA1MDNkMWRiZDMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OeS09mkTYFTSKkNjwNexquGNgy5B4ES2Hi6BZPhs3Dw',
      location:'Violet City',
      type:'Flying',
      typeColor:'#87CEEB',
      description:'TEAM SKY!!!',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLskfEoShUdykBBs42xVvcGm9zIpcGhmoZw&s',
      team:[
        { pokemon:'Pidgey', type:'Normal/Flying', level:7 },
        { pokemon:'Pidgeotto', type:'Normal/Flying', level:9 }
      ]
    },
    
    {
      name:'Bugsy',
      emoji:'🐛',
      age:14,
      badge:'Hive Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq0hf-f7ffc4ec-c1ca-48aa-9af6-73e05ae4ec2a.png/v1/crop/w_125,h_125,x_0,y_0,scl_0.021164917033525/hive_badge_by_jormxdos_dffq0hf-125s.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcTBoZi1mN2ZmYzRlYy1jMWNhLTQ4YWEtOWFmNi03M2UwNWFlNGVjMmEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mrtp0J53bxo-HvbqhSq2Zk7kfhYWc8IuRo--qFt5sVQ',
      location:'Azalea Town',
      type:'Bug',
      typeColor:'#A8B820',
      description:'I just like Bug Pokemon.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PxN7b4g9RaOGYBIc8Zc4vCwVYI41TISBTQ&s',
      team:[
        { pokemon:'Metapod', type:'Bug', level:14 },
        { pokemon:'Kakuna', type:'Bug/Poison', level:14 },
        { pokemon:'Scyther', type:'Bug/Flying', level:16 }
      ]
    },
    
    {
      name:'Whitney',
      emoji:'🐄', 
      age:18,
      badge:'Plain Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq0ho-ef1415d1-2561-4c92-83f2-ee0e97a68e4c.png/v1/fill/w_1280,h_1280/plain_badge_by_jormxdos_dffq0ho-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcTBoby1lZjE0MTVkMS0yNTYxLTRjOTItODNmMi1lZTBlOTdhNjhlNGMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jHZPv5LcpkuFkZ2K9h4j-lF9ClJQjlJK1Jl9UdPST8c',
      location:'Goldenrod City',
      type:'Normal',
      typeColor:'#A8A878',
      description:'Cute Pokemon can still be strong.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL11kOEB4KPaxq6vcNNRkPpNPQp-PCWePb1A&s',
      team:[
        { pokemon:'Clefairy', type:'Normal', level:18 },
        { pokemon:'Miltank', type:'Normal', level:20 }
      ]
    },
    
    {
      name:'Morty',
      emoji:'👻',
      age:22,
      badge:'Fog Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffprkp-9bba586a-71d8-4ce4-9358-26752ec3121f.png/v1/fill/w_1280,h_1280/marsh_badge_by_jormxdos_dffprkp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcHJrcC05YmJhNTg2YS03MWQ4LTRjZTQtOTM1OC0yNjc1MmVjMzEyMWYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Mq0fwM1YqbW-AqwAuaSP58JPZjdVqHrmnztMT7BqQgQ',
      location:'Ecruteak City',
      type:'Ghost',
      typeColor:'#705898',
      description:'There is no ghosts. I am just high',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dmQafiZRYBojMHTy3SQPQfAI58UrB1dFng&s',
      team:[
        { pokemon:'Gastly', type:'Ghost/Poison', level:21 },
        { pokemon:'Haunter', type:'Ghost/Poison', level:21 },
        { pokemon:'Haunter', type:'Ghost/Poison', level:23 },
        { pokemon:'Gengar', type:'Ghost/Poison', level:25 }
      ]
    },
    
    {
      name:'Chuck',
      emoji:'🥊',
      age:35,
      badge:'Storm Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq0i9-41bca448-21d8-4cfd-bcff-c8d45395b180.png/v1/fill/w_1280,h_1280/storm_badge_by_jormxdos_dffq0i9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcTBpOS00MWJjYTQ0OC0yMWQ4LTRjZmQtYmNmZi1jOGQ0NTM5NWIxODAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2jxx9OONV5DSkBo2yWuk_rEeMZGENJ2uP7Zd3cg5Bew',
      location:'Cianwood City',
      type:'Fighting',
      typeColor:'#C03028',
      description:'Discipline and power win every battle!',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAaLhE0wNrDoNK4McsxpYORQyBhw4UFYS1g&s',
      team:[
        { pokemon:'Primeape', type:'Fighting', level:27 },
        { pokemon:'Poliwrath', type:'Water/Fighting', level:30 }
      ]
    },
    
    {
      name:'Jasmine',
      emoji:'⚙️',
      age:19,
      badge:'Mineral Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq0ip-06398553-4dbb-4e74-8cf7-983d9cd0d254.png/v1/fill/w_1280,h_1280/mineral_badge_by_jormxdos_dffq0ip-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcTBpcC0wNjM5ODU1My00ZGJiLTRlNzQtOGNmNy05ODNkOWNkMGQyNTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Nk7o1TC0KULgahUK1RnGwc6cGL4ddQQkdrGVo7TLSu8',
      location:'Olivine City',
      type:'Steel',
      typeColor:'#B8B8D0',
      description:'A heart of steel never bends!',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrw4MinJGxJKjqlnA5OqVnDLjjP1H4BdxZQ&s',
      team:[
        { pokemon:'Magnemite', type:'Electric/Steel', level:30 },
        { pokemon:'Magnemite', type:'Electric/Steel', level:30 },
        { pokemon:'Steelix', type:'Steel/Ground', level:35 }
      ]
    },
    
    {
      name:'Pryce',
      emoji:'❄️',
      age:60,
      badge:'Glacier Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq0j0-c12fb86a-bc7e-4499-95b9-55a1b66069a8.png/v1/fill/w_894,h_894/glacier_badge_by_jormxdos_dffq0j0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcTBqMC1jMTJmYjg2YS1iYzdlLTQ0OTktOTViOS01NWExYjY2MDY5YTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ckwxJ9CTx6T1PQG3Tz_iTLfOdgaonS6uP7ZpGwBbbWQ',
      location:'Mahogany Town',
      type:'Ice',
      typeColor:'#98D8D8',
      description:'My patience is as cold as ice.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Kyq5j77kUnFlcSczh4ZgRpxf-X5GBqokhQ&s',
      team:[
        { pokemon:'Seel', type:'Water', level:27 },
        { pokemon:'Dewgong', type:'Water/Ice', level:29 },
        { pokemon:'Piloswine', type:'Ice/Ground', level:31 }
      ]
    },
    
    {
      name:'Clair',
      emoji:'🐲',
      age:24,
      badge:'Rising Badge',
      badgeImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffq0jc-f1c9adb3-501a-4f94-90df-e3929018bf5b.png/v1/fill/w_894,h_894/rising_badge_by_jormxdos_dffq0jc-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9lOGRkYzRkYS0yM2RkLTQ1MDItYjY1Yi0zNzhjOWNmZTVlZmEvZGZmcTBqYy1mMWM5YWRiMy01MDFhLTRmOTQtOTBkZi1lMzkyOTAxOGJmNWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.N_b5-okhKWaKbI0ryAmo7rJVaMw_iLcWOb-CjzaSIP8',
      location:'Blackthorn City',
      type:'Dragon',
      typeColor:'#7038F8',
      description:'Dragons bow to no one!',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7F8OzqHvFrOWAwY8i24ErPWydZ7JPWQ7AR0m-lkIvtw&s',
      team:[
        { pokemon:'Dragonair', type:'Dragon', level:37 },
        { pokemon:'Dragonair', type:'Dragon', level:37 },
        { pokemon:'Dragonair', type:'Dragon', level:37 },
        { pokemon:'Kingdra', type:'Water/Dragon', level:40 }
      ]
    }

  ]);
}