
export interface Monastery {
  id: number;
  name: string;
  founded: string;
  significance: string;
  location: string;
  image: string;
}

export interface Festival {
  id: number;
  name: string;
  date: string;
  description: string;
  monastery: string;
}
