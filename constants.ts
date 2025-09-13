
import type { Monastery, Festival } from './types';

export const MONASTERIES: Monastery[] = [
  {
    id: 1,
    name: "Rumtek Monastery",
    founded: "16th Century",
    significance: "The largest monastery in Sikkim, it is the seat of the Karma Kagyu lineage.",
    location: "Gangtok, Sikkim",
    image: "https://picsum.photos/seed/rumtek/800/600"
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    founded: "1705",
    significance: "One of the oldest and most important monasteries of the Nyingma order of Tibetan Buddhism.",
    location: "Pelling, Sikkim",
    image: "https://picsum.photos/seed/pemayangtse/800/600"
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    founded: "1641",
    significance: "Considered the most sacred and holy monastery in Sikkim, located on a heart-shaped hill.",
    location: "West Sikkim",
    image: "https://picsum.photos/seed/tashiding/800/600"
  },
  {
    id: 4,
    name: "Enchey Monastery",
    founded: "1909",
    significance: "Believed to be blessed by Lama Druptob Karpo, a master of tantric art known for his flying ability.",
    location: "Gangtok, Sikkim",
    image: "https://picsum.photos/seed/enchey/800/600"
  },
  {
    id: 5,
    name: "Ralang Monastery",
    founded: "1768",
    significance: "Famed for its annual Pang Lhabsol festival and the stunning collection of thangkas.",
    location: "South Sikkim",
    image: "https://picsum.photos/seed/ralang/800/600"
  },
  {
    id: 6,
    name: "Dubdi Monastery",
    founded: "1701",
    significance: "Also known as the Hermit's Cell, it was the first monastery established after the consecration of the first Chogyal.",
    location: "Yuksom, Sikkim",
    image: "https://picsum.photos/seed/dubdi/800/600"
  }
];

export const FESTIVALS: Festival[] = [
    {
        id: 1,
        name: "Saga Dawa",
        date: "Full moon of the 4th Tibetan month (May/June)",
        description: "Commemorates the birth, enlightenment, and death of Lord Buddha. Butter lamps are lit across monasteries.",
        monastery: "All Monasteries"
    },
    {
        id: 2,
        name: "Lhabab Duchen",
        date: "22nd day of the 9th Tibetan month (October/November)",
        description: "Celebrates Buddha's descent from the Trayastrimsa heaven after teaching his mother, Maya.",
        monastery: "All Monasteries"
    },
    {
        id: 3,
        name: "Pang Lhabsol",
        date: "15th day of the 7th Tibetan month (August/September)",
        description: "A unique Sikkimese festival worshipping Mount Khangchendzonga as the guardian deity.",
        monastery: "Tsuklakhang Palace, Gangtok"
    },
     {
        id: 4,
        name: "Losar",
        date: "Tibetan New Year (February/March)",
        description: "The Tibetan New Year, marked by colorful rituals, cham dances, and feasting.",
        monastery: "Rumtek & Phodong Monastery"
    },
];
