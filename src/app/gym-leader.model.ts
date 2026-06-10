
export interface Pokemon {
  pokemon: string;
  type: string;
  level: number;
}

export interface GymLeader {
  name: string;
  badge: string;
  location: string;
  type: string;
  typeColor: string;
  image: string;
  emoji: string;
  team: Pokemon[];
}