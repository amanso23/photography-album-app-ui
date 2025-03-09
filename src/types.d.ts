export interface Album {
  id: number;
  title: string;
  cover: string;
  artist: string;
  background: string;
  gallery: Image[];
  description: string;
}

export interface Image {
  id: number;
  title: string;
  cover: string;
  source: string;
}
